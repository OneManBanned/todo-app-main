'use server'

import dbConnect from "../lib/dbConnect";
import { z } from 'zod';
import User from '@/app/lib/userModel'
import bcrypt from 'bcrypt'

const FormSchema = z.object({
    name: z.string(),
    password: z.string(),
    passwordCheck: z.string(),
});

const CreateUser = FormSchema;

export async function registerUser(formData: FormData) {


    try {

        dbConnect()

        const { name, password, passwordCheck } = CreateUser.parse({
            name: formData.get('name'),
            password: formData.get('password'),
            passwordCheck: formData.get('passwordCheck')
        })

        const user = await User.findOne({name: name});

        // Check name is not already saved in database
        if (user) throw new Error("User already exists")
        // Check if passwords match
        if (password !== passwordCheck) throw new Error('Passwords need to match')

        bcrypt.hash(password, 10, async (err: any, hash: any) => {

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
