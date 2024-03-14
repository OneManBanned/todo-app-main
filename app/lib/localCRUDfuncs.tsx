import { v4 as uuid } from "uuid";
import { SetStateAction, ChangeEvent, Dispatch, SyntheticEvent } from "react"
import { fetchLocalStorageTodos } from "../ui/fetchLocalStorageTodos"
import { Todos, UserTodos } from "../lib/types";

export function createLocalTodo(e: SyntheticEvent, setLocalTodos: Dispatch<SetStateAction<UserTodos[]>>, todo: UserTodos) {

    e.preventDefault();

    todo._id = uuid();
    setLocalTodos(prev => [...prev, todo])

    let storedTodos: Todos = fetchLocalStorageTodos()

    if (storedTodos == null) {
        return
    } else {
        const { todos } = storedTodos
        todos.push(todo)
        localStorage.setItem("localTodos", `{"todos": ${JSON.stringify(todos)}}`)
    }
}

export function deleteLocalTodo(setLocalTodos: Dispatch<SetStateAction<UserTodos[]>>, id: string) {

    setLocalTodos((prev) => prev.filter((t) => t._id !== id))

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

export function updateLocalCompleteStatus(setLocalTodos: Dispatch<SetStateAction<UserTodos[]>>, id: string) {

    setLocalTodos((prev) => prev.map((t) =>
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

export function deleteCompletedLocalTodos(setLocalTodos: Dispatch<SetStateAction<UserTodos[]>>) {

    setLocalTodos((prev) => prev.filter((t) => !t.completed))

    let storedTodos: Todos = fetchLocalStorageTodos()

    if (storedTodos == null) {
        return
    } else {

        const { todos } = storedTodos
        localStorage.setItem("localTodos",
            `{"todos": ${JSON.stringify(todos.filter(t => !t.completed))}}`)
    }
}

export function handleCompletedStatus(e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<UserTodos>> ) {

    setter(prev => {
        return {
            ...prev,
            [e.target.name]: !prev.completed
        }
    })
}

export function handleTextInput(e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<UserTodos>>) {

    setter(prev => {
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
    })
}
