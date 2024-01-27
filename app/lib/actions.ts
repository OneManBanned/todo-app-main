'use server'

import clientPromise from '@/app/lib/mongodb';
import { z } from 'zod';
import { signIn } from '@/auth';
import AuthError from 'next-auth';



const FormSchema = z.object({


    id: z.string(),
    completed: z.coerce.boolean(),
    todo: z.string(),
    date: z.string()
})

const CreateTodo = FormSchema.omit({ id: true, date: true });

export async function createTodo(formData: FormData) {

    'use server';

    try {
        const client = await clientPromise
        const db = client.db("NextJsTodoApp")

        const { completed, todo } = CreateTodo.parse({
            completed: formData.get('completed'),
            todo: formData.get('todo')
        })

        const date = new Date().toISOString().split('T')[0];

        await db
            .collection('todos')
            .insertOne({ completed: completed, todo: todo, date: date })

    } catch (e) {

    }
}


export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error
    }
}
