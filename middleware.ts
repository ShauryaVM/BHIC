import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

import { env } from '@/lib/env';

const allowedDomain = env.ALLOWED_EMAIL_DOMAIN.toLowerCase();

export default withAuth(
  function middleware(request: NextRequest) {
    const token = request.nextauth.token;
    if (!token?.email) {
      return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    const [, domain] = token.email.split('@');
    if (!domain || domain.toLowerCase() !== allowedDomain) {
      return NextResponse.redirect(new URL('/auth/not-authorized', request.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
);

export const config = {
  matcher: [
    '/((?!api/auth|auth|_next/static|_next/image|favicon.ico|manifest|robots).*)'
  ]
};

