// This file ensures Stripe webhooks work properly on Vercel
import type { NextApiRequest, NextApiResponse } from 'next';

// Disable body parsing for Stripe webhook
export const config = {
  api: {
    bodyParser: false,
  },
};

// This is just a placeholder - the actual webhook is in app/api/webhooks/stripe/route.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(404).json({ message: 'This endpoint has moved to /api/webhooks/stripe' });
}