export interface UserTodos {
    _id: string;
    todo: string;
    completed: boolean;
}

export interface Todos { todos: UserTodos[] }
