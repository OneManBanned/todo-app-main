import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/app/lib/mongodb";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placehorder: "jsmith" },
                password: { label: "Password", type: "text" },
            },
            async authorize(credentials, req) {

                    const client = await clientPromise
                    const db = client.db("NextJsTodoApp")

                    let username = req.body?.username

                    let user = await db
                        .collection('users')
                        .findOne({ name: username })
                console.log(user)

                if (user) {
                    console.log('logged in')
                    return user
                } else {
                    console.log(null)
                    return null
                }
            },
        })
    ]
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
