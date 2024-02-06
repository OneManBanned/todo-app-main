import TodoInput from "./components/TodoInput"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getTodos } from "./utils/getTodos";



export default async function Home() {

    const session = await getServerSession(authOptions);

    if (session) {


 getTodos(session.user.id);

        console.log("Home() called")

    }

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
