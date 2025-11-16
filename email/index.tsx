import { Resend } from 'resend';
import { render } from '@react-email/components';
import { SENDER_EMAIL, APP_NAME } from '@/lib/constants';
import { Order } from '@/types';
import PurchaseReceiptEmail from './purchase-receipt';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendPurchaseReceipt = async ({order}: {order: Order}) => {
    try {
        const emailHtml = await render(<PurchaseReceiptEmail order={order} />);
        
        const result = await resend.emails.send({
            from: `${APP_NAME} <${SENDER_EMAIL}>`,
            to: order.user.email,
            subject: `Order Confirmation ${order.id}`,
            html: emailHtml,
        });
        
        console.log('Email sent successfully:', result);
        return result;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
}
