import NextAuth from "next-auth/next";

declare module "next-auth" {
    type Session = {
        user: {
            name: string,
            id: string
        },
    }
}
