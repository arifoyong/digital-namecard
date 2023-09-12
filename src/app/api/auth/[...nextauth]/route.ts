import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'
import prisma from '@/lib/prisma'


const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: PrismaAdapter(prisma),

    callbacks: {
        session: async ( {session, user} ) => {
            if (session.user) {
                session.user.id = user.id;
            }
            return session
        }
    }
})

export { handler as GET, handler as POST }

// callbacks: { async redirect({ url, baseUrl }) { return baseUrl }, }