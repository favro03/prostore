//the auth.ts file has the config set up

import { handlers } from '@/auth';

export const { GET, POST } = handlers;

// Force Node.js runtime for auth routes to support Prisma with Neon adapter
export const runtime = 'nodejs';