import TodoInput from "./components/TodoInput"
import LatestTodos from "./components/LatestTodos"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {

    const session = await getServerSession(authOptions)

    const fetchDatabaseTodos = await fetch(
        `http://localhost:3000/api/todos/${session?.user?.id}`,
        { next: { tags: ['todos'] } }
    )

    const { todos: databaseTodos } = await fetchDatabaseTodos.json()

    return (
        <>
            <TodoInput />
            <main>
                <LatestTodos
                    sessionId={session ? session?.user?.id : null}
                    databaseTodos={databaseTodos ? databaseTodos : null}
                />
            </main>
        </>
    )
}
