'use server'

import dbConnect from "../lib/dbConnect";
import User from "@/app/lib/userModel"

export async function getTodos(userId: string | undefined) {

    dbConnect()

    try {

        console.log("getTodos() called", userId)

        const populatedUser = await User
            .findById(userId)
            .populate({ path: "todos" })

        console.log(populatedUser)

        if (populatedUser) {
            return populatedUser;
        }

    } catch (e) {

        console.log(e)

    }

    return undefined

}
