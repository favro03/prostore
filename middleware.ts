import { auth } from '@/auth-config';

export default auth(() => {
  // Note: This middleware wrapper will only run for paths matched by the config.matcher
  // Webhook paths are already excluded by the matcher, so they bypass auth entirely
  
  // The auth callback handles the actual authentication logic in auth-config.ts
  return;
});

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