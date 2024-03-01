'use client'

import { registerUser } from "../lib/user_actions"

export default async function Register() {

    return (
        <form action={registerUser} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <label htmlFor="name">Enter username</label>
            <input className="border border-black" type="name" name="name" id="name" />
            <label htmlFor="password">Enter password</label>
            <input className="border border-black" type="password" name="password" id="password" />
            <label htmlFor="passwordCheck">Re-enter password</label>
            <input className="border border-black" type="password" name="passwordCheck" id="passwordCheck" />
            <button type="submit">Register</button>
        </form>
    )
}

