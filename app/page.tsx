import TodoInput from "./components/TodoInput"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Home() {

    const session = await getServerSession(authOptions);
    console.log('session', session)
    console.log()

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
