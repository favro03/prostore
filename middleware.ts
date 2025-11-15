export { auth as middleware } from '@/auth-config';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/webhooks (webhook endpoints - EXCLUDED from auth middleware entirely)
     * - api/auth (NextAuth.js endpoints)
     * - api/uploadthing 
     * - _next/static (static files)
     * - _next/image (image optimization files)  
     * - favicon.ico (favicon file)
     */
    '/((?!api/webhooks|api/auth|api/uploadthing|_next/static|_next/image|favicon.ico).*)',
  ],
};