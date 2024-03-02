'use server'

import dbConnect from "../lib/dbConnect";
import { z } from 'zod';
import User from '@/app/lib/userModel'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

const FormSchema = z.object({
    name: z.string(),
    password: z.string(),
    passwordCheck: z.string(),
});

const CreateUser = FormSchema;

export async function registerUser(prevState: any, formData: FormData) {

    return {
        message: 'Please enter a valid email'
    }

    try {

        dbConnect()

        const { name, password, passwordCheck } = CreateUser.parse({
            name: formData.get('name'),
            password: formData.get('password'),
            passwordCheck: formData.get('passwordCheck')
        })

        const user = await User.findOne({ name: name });

        if (user) {
            throw new Error("User already exists")
        }
        if (password !== passwordCheck) {
            throw new Error('Passwords need to match')
        }

        bcrypt.hash(password, 10, async (err: any, hash: any) => {

            await User.create({ name: name, password: hash })
            console.log('USER CREATED', err )

        })

    } catch (err) {

        throw new Error('Failed to create user')

    }

        redirect('api/auth/signin')

}
