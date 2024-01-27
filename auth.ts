import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'
import clientPromise from '@/app/lib/mongodb'

async function getUser(name: string) {
    try {
        const client = await clientPromise
        const db = client.db("NextJsTodoApp")


        const user = await db
            .collection('todos')
            .findOne({ name: name })

        return user

    } catch (e) {
        console.log('Failed to fetch user:', e)
        throw new Error('Failed to fetch user.')
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
                .object({ name: z.string(), password: z.string() })
                .safeParse(credentials);
            if (parsedCredentials.success) {
                const {name,password} = parsedCredentials.data;
                const user = await getUser(name)
                if (!user) return null;
                return user
            }
            console.log('Invalid credentials')
            return null
        },
    })]
});
