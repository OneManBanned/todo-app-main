'use client'

import { useFormState } from "react-dom"
import { registerUser, State } from "../lib/user_actions"

const prevState = {
    message: null,
    errors: {}
}

export default function Register() {

    const [state, dispatch] = useFormState<State, FormData>(registerUser, prevState)

    return (
        <form action={dispatch} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <label htmlFor="name">Enter username</label>
            <input
                className="border border-black"
                type="name"
                name="name"
                id="name"
                aria-describedby="name-error"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
                {state.errors?.name &&
                    state.errors.name.map((error: string) => (
                        <p className="mt-2 text-sm text-red" key={error}>
                            {error}
                        </p>
                    ))}
            </div>
            <label htmlFor="password">Enter password</label>
            <input
                className="border border-black"
                type="password"
                name="password"
                id="password"
                aria-describedby="password-error"
            />
            <div id="password-error" aria-live="polite" aria-atomic="true">
                {state.errors?.password &&
                    state.errors.password.map((error: string) => (
                        <p className="mt-2 text-sm text-red" key={error}>
                            {error}
                        </p>
                    ))}
            </div>
            <label htmlFor="passwordCheck">Re-enter password</label>
            <input
                className="border border-black"
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                aria-describedby="passwordCheck-error"
            />
            <div id="passwordCheck-error" aria-live="polite" aria-atomic="true">
                {state.errors?.passwordCheck &&
                    state.errors.passwordCheck.map((error: string) => (
                        <p className="mt-2 text-sm text-red" key={error}>
                            {error}
                        </p>
                    ))}
            </div>
            <div id="error" aria-live="polite" aria-atomic="true">
                {state.message && <p className="mt-2 text-sm text-red" > {state.message} </p> }
            </div>
            <button>Register</button>
        </form>
    )
}

