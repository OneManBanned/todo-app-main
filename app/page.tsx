import { getServerSession } from "next-auth/next"
import LatestTodos from "./components/LatestTodos"
import { authOptions } from "@/app/lib/auth"
import dbConnect from "./lib/dbConnect"
import User from "@/app/lib/userModel"
import Todo from "@/app/lib/todoModel"


async function getTodos(sessionId: string) {

    dbConnect()

    try {

        const populatedUser = await User
            .findById(sessionId)
            .populate({ path: "todos", model: Todo })
            .select("todos")

        return JSON.stringify(populatedUser);

    } catch (e) {

        console.log("THERE HAS BEEN AN ERROR", e)

    }
}

export default async function Home() {

    const session = await getServerSession(authOptions)
    let databaseTodos;

    if (session) {
        const response = await getTodos(session?.user.id)
        databaseTodos = response ? JSON.parse(response) : response;
    }

    return (
        <>
            <main>
                <LatestTodos
                    
                    sessionId={session?.user?.id}
                    databaseTodos={databaseTodos}
                />
            </main>
        </>
    )
}
