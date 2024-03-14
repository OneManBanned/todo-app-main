export type UserTodos = {
    _id: string;
    todo: string;
    completed: boolean;
}

export type Todos = { todos: UserTodos[] }
