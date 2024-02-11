'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from 'react'

export default function LatestTodos() {

    const session = useSession()
    const [message, setMessage] = useState([])
    let idObj = session.data?.user.id

    if (session.status == 'authenticated') {

        useEffect(() => {
             fetch(`http://localhost:3000/api/todos/${idObj}`)
                .then(res => res.json())
                .then(d => console.log("DATA", d))
        }, [message])


    }

    return (
        <ul>
            <li></li>
        </ul>
    )
}
