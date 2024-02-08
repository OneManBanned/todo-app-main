import TodoInput from "./components/TodoInput"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getTodos } from "./utils/getTodos";



export default async function Home() {

    const session = await getServerSession(authOptions);
    const databaseTodos = session ? await getTodos(session?.user.id) : [];

    {
        session 
            ? console.log("Home() called with session", '\n', databaseTodos)
            : console.log("Home() called without session", '\n', databaseTodos)
    }
    return (
        <>
            <TodoInput />
            <main>
            </main>
        </>
    )
}
