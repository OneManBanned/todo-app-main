import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/app/lib/mongodb";
import { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/lib/userModel"
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placehorder: "jsmith" },
                password: { label: "Password", type: "text" },
            },
            async authorize(credentials, req) {

                dbConnect();

                if (credentials == null) return null;

                try {

                    const user = await User.findOne({ name: credentials.username })

                    if (!user) return null;

                    const match = await bcrypt.compare(credentials.password, user.password)

                    if (!match) return null;

                    return user

                } catch (e) {
                    console.log(e)
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user._id
            }
            return token;
        },
        session: async ({ session, token }: any) => {
                session.user.id = token.id;
            return session;
        },
    },
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

