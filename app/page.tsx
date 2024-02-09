import TodoInput from "./components/TodoInput"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";
import LatestTodos from "./components/LatestTodos"



export default async function Home() {

    const session = await getServerSession(authOptions);


        return (
        <>
            <TodoInput />
            <main>
                <LatestTodos />
            </main>
        </>
    )
}
