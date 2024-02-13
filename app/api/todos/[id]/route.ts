import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/lib/userModel"
import Todo from "@/app/lib/todoModel"

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: { id: string }}) {

    dbConnect()

    try {

        const populatedUser = await User
            .findById(params.id)
            .populate({path: "todos", model: Todo})
            .select("todos")

        return NextResponse.json(
            {"todos": populatedUser.todos}, 
        )
        
    } catch(e) {

        console.log("THERE HAS BEEN AN ERROR", e)

    }

}
