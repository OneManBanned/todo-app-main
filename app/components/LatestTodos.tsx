'use client'
import { useSession } from "next-auth/react"

export default function LatestTodos() {

    const session = useSession()

    console.log(session)

    return (
        <ul>

        </ul>
    )
}
