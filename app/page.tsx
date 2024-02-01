import TodoInput from "./components/TodoInput"
import { getServerSession } from "next-auth"


export default async function Home() {
    const session = await getServerSession();
    console.log('session', session)

    return (
        <>
            <TodoInput />
            <main>
                getServerSession Result
                {session?.user?.name
                    ? (<h2>{session?.user?.name}</h2>)
                    : (<h2>Not logged in</h2>)
                }
            </main>
        </>
    )
}
