import { useFormState, useFormStatus } from "react-dom"
import { authenticate } from "../lib/actions"

const Login = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined)
    return (

<form action={dispatch}>
<label htmlFor="name">
<input type="text" id="name"/>
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
