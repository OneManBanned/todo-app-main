import TodoInput from "./components/TodoInput"
import LatestTodos from "./components/LatestTodos"

export default async function Home() {
        return (
        <>
            <TodoInput />
            <main>
                <LatestTodos />
            </main>
        </>
    )
}
