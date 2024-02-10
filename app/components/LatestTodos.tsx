'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from 'react'

export default function LatestTodos() {

    const session = useSession()
    const [message, setMessage] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/todos')
            .then(res => res.json())
            .then(data => setMessage(data.message))
    }, [message])

    return (
        <ul>
            <li>{message}</li>
        </ul>
    )
}
