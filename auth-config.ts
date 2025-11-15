import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import type { Session } from 'next-auth';

// Simple auth configuration for middleware (Edge Runtime)
export const authConfig = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in'
  },
  providers: [], // Empty providers array for middleware
  callbacks: {
    authorized({ request, auth }: { request: NextRequest; auth: Session | null }) {
      // Array of regex patterns of paths we want to protect
      const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/profile/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
      ];

      // Array of paths that should bypass authentication entirely
      const publicApiPaths = [
        /\/api\/webhooks\/(.*)/,
        /\/api\/auth\/(.*)/,
        /\/api\/uploadthing\/(.*)/,
      ];

      // Get pathname from the req URL object
      const { pathname } = request.nextUrl;
      
      // Allow public API paths to bypass authentication
      if (publicApiPaths.some((p) => p.test(pathname))) return true;
      
      // Check if user is not authenticated and accessing a protected path
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

      // Check for session cart cookie
      if (!request.cookies.get('sessionCartId')) {
        // Generate new session cart id cookie
        const sessionCartId = crypto.randomUUID();

        // Clone the req headers
        const newRequestHeaders = new Headers(request.headers);

        // Create new response and add the new headers
        const response = NextResponse.next({
          request: {
            headers: newRequestHeaders
          }
        });
        // Set newly generated sessionCartId in the response cookies
        response.cookies.set('sessionCartId', sessionCartId);

        return response;
      } else {
        return true;
      }
    }
  }
} satisfies NextAuthConfig;

export const { auth } = NextAuth(authConfig);