'use client'

import { useFormState } from "react-dom"
import { registerUser } from "../lib/user_actions"

const prevState = {
    message: '',
}

export default async function Register() {

    const [state, formAction] = useFormState(registerUser, prevState)

    console.log(state)

    return (
        <form action={formAction} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <label htmlFor="name">Enter username</label>
            <input className="border border-black" type="name" name="name" id="name" required/>
            <label htmlFor="password">Enter password</label>
            <input className="border border-black" type="password" name="password" id="password" required/>
            <label htmlFor="passwordCheck">Re-enter password</label>
            <input className="border border-black" type="password" name="passwordCheck" id="passwordCheck" required/>
            <button>Register</button>
        </form>
    )
}

