'use client'

import { getSession, useSession } from "next-auth/react"
import { useEffect, useState } from 'react'

async function authId() {
    const session = await getSession()
    return session;
}

export default function LatestTodos() {

    const session = authId()
    const [sessionId, setSessionId] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [todos, setTodos] = useState([])

    session
    .then((res, rej) => {
            if (res) {

            setSessionId(res?.user.id)

            fetch(`http://localhost:3000/api/todos/${sessionId}`)
                .then(res => res.json())
                .then(d => {
                        console.log(typeof d.todos)
                    })
            } else if (rej) {
                console.log('rejected')
            }
        })


    return (
        <ul>
            <li>Hi</li>
        </ul>
    )
}

        /*

*/
