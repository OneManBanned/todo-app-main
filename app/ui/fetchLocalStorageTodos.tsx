export function fetchLocalStorageTodos() {

    let localTodos: any = localStorage.getItem("localTodos")

    if (localTodos == null) {

        localStorage.setItem("localTodos", '{"todos":[]}')
        localTodos = localStorage.getItem("localTodos")

        if (localTodos) return localTodos = JSON.parse(localTodos)

    } else {

        return localTodos = JSON.parse(localTodos)

    }
}
