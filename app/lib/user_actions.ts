'use server'

import dbConnect from "../lib/dbConnect";
import { z } from 'zod';
import User from '@/app/lib/userModel'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

const FormSchema = z.object({
    name: z
    .string()
    .min(1, {message:"Name is required"}),
    password: z
    .string()
    .min(1, {message:"Password is required"}),
    passwordCheck: z
    .string()
    .min(1, {message:"Please re-enter your password"}),
});

export type State = {
    errors?: {
        name?: string[];
        password?: string[];
        passwordCheck?: string[];
    }
    message?: string | null
}

const CreateUser = FormSchema;

export async function registerUser(prevState: State, formData: FormData) {

    try {

        dbConnect()

        const validatedFields = CreateUser.safeParse({
            name: formData.get('name'),
            password: formData.get('password'),
            passwordCheck: formData.get('passwordCheck')
        })

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: 'Missing fields. Failed to Create user',
            }
        }

        const { name, password, passwordCheck } = validatedFields.data

        const user = await User.findOne({ name: name });

        if (user) {
            return {
                message: 'User already exists'
            }
        }
        if (password !== passwordCheck) {
            return {
                message: 'passwords must match'
            }
        }

        bcrypt.hash(password, 10, async (err: any, hash: any) => {
            await User.create({ name: name, password: hash })
        })

    } catch (err) {

        throw new Error('Failed to create user')

    }

    redirect('api/auth/signin')

}
