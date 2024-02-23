import TodoInput from "./components/TodoInput"
import LatestTodos from "./components/LatestTodos"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {

    const session =  await getServerSession(authOptions)


    const res = await fetch(`http://localhost:3000/api/todos/${session.user?.id}`, { next: { tags: ['todos']}})
    const todosLatest = await res.json()


if (!session) return <p>...pending</p>

        return (
        <>
            <TodoInput />
            <main>
                <LatestTodos 
                    sessionId={session.user?.id}
                    todos={todosLatest}
                />
            </main>
        </>
    )
}
