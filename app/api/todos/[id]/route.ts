import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/lib/userModel"
import Todo from "@/app/lib/todoModel"

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: { id: string }}) {

    console.log("Called in GET", params )

    dbConnect()

    try {

        const populatedUser = await User
            .findById(params.id)
            .populate({path: "todos", model: Todo})
            .select("todos")

        console.log(populatedUser)
        
    } catch(e) {

        console.log(e)
    }


    return NextResponse.json({"message": "hello"})

}
