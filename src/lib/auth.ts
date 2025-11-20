import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@/lib/prisma';
import { env } from '@/lib/env';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid email profile https://www.googleapis.com/auth/gmail.send'
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/not-authorized'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }

      const [, domain] = user.email.split('@');
      if (!domain || domain.toLowerCase() !== env.ALLOWED_EMAIL_DOMAIN.toLowerCase()) {
        return '/auth/not-authorized';
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role ?? token.role ?? 'STAFF';
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = (token.role as string) ?? 'STAFF';
      }
      return session;
    }
  },
  events: {
    async signIn({ user }) {
      if (!user.email) return;
      const role = env.ADMIN_EMAILS.includes(user.email.toLowerCase()) ? 'ADMIN' : 'STAFF';
      await prisma.user
        .update({
          where: { id: user.id as string },
          data: {
            role,
            lastLoginAt: new Date()
          }
        })
        .catch(() => undefined);
    }
  },
  secret: env.NEXTAUTH_SECRET
};

