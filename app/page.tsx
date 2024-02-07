import TodoInput from "./components/TodoInput"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getTodos } from "./utils/getTodos";



export default async function Home() {

    const session = await getServerSession(authOptions);
    const databaseTodos = session ? await getTodos(session?.user.id) : [];

    console.log(session)

    return (
        <>
            <TodoInput />
            <main>
            </main>
        </>
    )
}
