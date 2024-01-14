import clientPromise from "../lib/mongodb"

async function registerUser(formData: FormData) {
    'use server'

    try {
        const client = await clientPromise
        const db = client.db("NextJsTodoApp")
        const myCol = db.collection('users')

        const fields = {
            name: formData.get('name'),
            password: formData.get('password')
        }

        const result = await myCol.insertOne({ name: fields.name, password: fields.password })
        console.log(`A document was inserted`)

    } catch (e) {

    }
}

export default async function Register() {

    return (
        <form action={registerUser} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <input className="border border-black" type="name" name="name" />
            <input className="border border-black" type="password" name="password" id="" />
            <button type="submit">Register</button>
        </form>
    )
}