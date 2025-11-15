import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { updateOrderToPaid } from '@/lib/actions/order.actions';

export async function POST(req: NextRequest) {
  let event: Stripe.Event;

  try {
    event = Stripe.webhooks.constructEvent(
      await req.text(),
      req.headers.get('stripe-signature') as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    return NextResponse.json(
      { message: `Webhook signature verification failed: ${errorMessage}` },
      { status: 400 }
    );
  }

  // New event name
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    await updateOrderToPaid({
      orderId: paymentIntent.metadata?.orderId,
      paymentResult: {
        id: paymentIntent.id,
        status: 'COMPLETED', // or paymentIntent.status
        // use receipt_email or store the email in metadata during checkout
        email_address: paymentIntent.receipt_email || '',
        pricePaid: (paymentIntent.amount_received / 100).toFixed(),
      },
    });

    return NextResponse.json({
      message: 'updateOrderToPaid was successful',
    });
  }

  return NextResponse.json({
    message: `Unhandled event type: ${event.type}`,
  });
}
