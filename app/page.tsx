import { getServerSession } from "next-auth/next"
import TodoInput from "./components/TodoInput"
import LatestTodos from "./components/LatestTodos"
import { authOptions } from "@/app/lib/auth"

export default async function Home() {

    const session = await getServerSession(authOptions)
    let databaseTodos;

    if (session) {

        const fetchDatabaseTodos = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/todos/${session.user?.id}`,
            { next: { tags: ['todos'] } }
        )

        databaseTodos = await fetchDatabaseTodos.json()

    }

    return (
        <>
            <TodoInput />
            <main>
                <LatestTodos
                    sessionId={session?.user?.id}
                    databaseTodos={databaseTodos}
                />
            </main>
        </>
    )
}
