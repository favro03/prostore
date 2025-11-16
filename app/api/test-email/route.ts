import { NextResponse } from 'next/server'
import { sendPurchaseReceipt } from '@/email'

export async function POST() {
  try {
    const testOrder = {
      id: 'test-order-123',
      userId: 'test-user',
      user: {
        name: 'Test User',
        email: 'wetr9902@gmail.com', // Your actual email
      },
      paymentMethod: 'Stripe',
      shippingAddress: {
        fullName: 'Test User',
        streetAddress: '123 Test St',
        city: 'Test City',
        postalCode: '12345',
        country: 'US',
      },
      createdAt: new Date(),
      totalPrice: '100.00',
      taxPrice: '10.00',
      shippingPrice: '5.00',
      itemsPrice: '85.00',
      orderitems: [{
        name: 'Test Product',
        orderId: 'test-order-123',
        productId: 'test-product-123',
        slug: 'test-product',
        qty: 1,
        image: '/images/sample-products/p1-1.jpg',
        price: '85.00',
      }],
      isDelivered: false,
      deliveredAt: null,
      isPaid: true,
      paidAt: new Date(),
      paymentResult: {
        id: 'test-payment-123',
        status: 'succeeded',
        pricePaid: '100.00',
        email_address: 'wetr9902@gmail.com',
      },
    }

    console.log('Testing email sending to wetr9902@gmail.com...')
    const result = await sendPurchaseReceipt({ order: testOrder })
    console.log('Email result:', result)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      result 
    })
  } catch (error) {
    console.error('Test email failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}