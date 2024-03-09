import { SetStateAction } from "react"
import { fetchLocalStorageTodos } from "../ui/fetchLocalStorageTodos"
import { Todos, UserTodos } from "../lib/types";

export function deleteLocalTodo(setLocalTodos: React.Dispatch<SetStateAction<UserTodos[]>>, id: string) {

    setLocalTodos((prev: UserTodos[]) => prev.filter((t: UserTodos) => t._id !== id))

    let storedTodos: Todos = fetchLocalStorageTodos()

    if (storedTodos == null) {
        return
    } else {
        const { todos } = storedTodos
        localStorage.setItem(
            "localTodos",
            `{"todos": ${JSON.stringify(todos.filter(t => t._id !== id))}}`)
    }
}

export function updateLocalCompleteStatus(setLocalTodos: React.Dispatch<SetStateAction<UserTodos[]>>, id: string) {

    setLocalTodos((prev: UserTodos[]) => prev.map((t: UserTodos) =>
        t._id === id
            ? { ...t, completed: !t.completed }
            : t
    ))

    let storedTodos: Todos = fetchLocalStorageTodos()

    if (storedTodos == null) {
        return
    } else {

        const { todos } = storedTodos
        const updatedTodos = todos.map(t =>
            t._id === id
                ? { ...t, completed: !t.completed }
                : t)

        localStorage.setItem("localTodos",
            `{"todos": ${JSON.stringify(updatedTodos)}}`)
    }

}

export function deleteCompletedLocalTodos(setLocalTodos: React.Dispatch<SetStateAction<UserTodos[]>>) {

    setLocalTodos((prev: UserTodos[]) => prev.filter((t: UserTodos) => !t.completed))

    let storedTodos: Todos = fetchLocalStorageTodos()

    if (storedTodos == null) {
        return
    } else {

        const { todos } = storedTodos
            localStorage.setItem("localTodos",
            `{"todos": ${JSON.stringify(todos.filter(t => !t.completed))}}`)
    }
}
