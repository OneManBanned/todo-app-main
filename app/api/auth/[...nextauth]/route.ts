import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/app/lib/mongodb";
import { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/lib/models"

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

                    const user = User.findOne({ name: credentials.username })

                    if (user) {
                        // bcrypt password
console.log('user found')
                        return user
                    } else {
                        throw new Error("user not found");
                    }

                } catch (e: any) {
                    throw new Error(e);
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.user = {
                    _id: user._id,
                    name: user.name,
                };
            }
            return token;
        },
        session: async ({ session, token }: any) => {
            if (token) {
                session.user = token.user;
            }
            return session;
        },
    },
}

export const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }

