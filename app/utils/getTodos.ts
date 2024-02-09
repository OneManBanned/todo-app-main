'use server'

import dbConnect from "../lib/dbConnect";
import User from "@/app/lib/userModel"
import Todo from "@/app/lib/todoModel"

export async function getTodos(userName: string | undefined) {

    dbConnect()

    try {


        const populatedUser = await User
            .find({name: userName})
            .populate({path: "todos", model: Todo})
            .select("todos")

        if (populatedUser) {
            return populatedUser;
        }

    } catch (e) {

        console.log(e)

    }

    return undefined

}
