'use server'

import dbConnect from "../lib/dbConnect";
import User from "@/app/lib/userModel"

export async function getTodos(userId: string) {

    dbConnect()

    try {

        console.log("getTodos() called", userId)

        const u = await User
            .findById(userId)
            .populate( { path: "todos", },)
            .transform((i) => console.log(i))


        console.log(u)

    } catch (e) {

        console.log(e)

    }

}
