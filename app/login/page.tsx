
/*
'use client'

import { useFormState } from "react-dom"

const Login = () => {

    const [errorMessage, dispatch] = useFormState(authenticate, undefined)

    return (

        <form action={dispatch}>
            <label htmlFor="name">
                <input type="text" id="name" />
            </label>
            <div>
                {errorMessage && (
                    <>
                        <p>{errorMessage}</p>
                    </>
                )}
            </div>
        </form>
    )
}

export default Login
*/
