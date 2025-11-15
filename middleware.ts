export { auth as middleware } from '@/auth-config';

export const config = {
  // Explicitly exclude webhook paths from middleware
  matcher: [
    /*
     * Match all request paths except for:
     * 1. /api/webhooks (webhook endpoints) 
     * 2. /api/auth (NextAuth.js)
     * 3. /api/uploadthing
     * 4. /_next/static (static files)
     * 5. /_next/image (image optimization files)
     * 6. /favicon.ico
     */
    '/((?!api/webhooks|api/auth|api/uploadthing|_next/static|_next/image|favicon.ico).*)',
  ],
};