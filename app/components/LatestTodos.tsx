'use client'

export default function LatestTodos(props) {



    return (
        <ul>

             {props.latestTodos && props.latestTodos.todos.map((todo: any, index: any) => {
                return <li key={index}>{todo.todo}</li>
            })}
        </ul>
    )
}
