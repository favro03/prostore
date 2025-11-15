export { auth as middleware } from '@/auth-config';

export const config = {
  // Match all request paths except for the ones starting with:
  // - api/webhooks (webhook endpoints)
  // - api/auth (NextAuth.js)
  // - api/uploadthing
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ['/((?!api/webhooks|api/auth|api/uploadthing|_next/static|_next/image|favicon.ico).*)']
};