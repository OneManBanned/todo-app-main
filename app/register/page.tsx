import dbConnect from "../lib/dbConnect";
import { hash } from 'bcrypt'
import { z } from 'zod';
import User from '@/app/lib/models'

const FormSchema = z.object({
    name: z.string(),
    password: z.string(),
    passwordCheck: z.string(),
});

const CreateUser = FormSchema;

async function registerUser(formData: FormData) {
    'use server'

    try {

        dbConnect()

        const { name, password, passwordCheck } = CreateUser.parse({
            name: formData.get('name'),
            password: formData.get('password'),
            passwordCheck: formData.get('passwordCheck')
        })


        if (password !== passwordCheck) throw new Error('Passwords need to match')

        hash(password, 10, async (err, hash: Promise) => {
            if (!err) {
                await User.create({ name: name, password: hash })
            } else {
                console.log(err)
            }
        })


    } catch (err) {
        console.log(err)
    }
}

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
