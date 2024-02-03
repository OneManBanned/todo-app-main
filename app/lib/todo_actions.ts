'use server'

import dbConnect from './dbConnect';
import { z } from 'zod';



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
        dbConnect()

        const { completed, todo } = CreateTodo.parse({
            completed: formData.get('completed'),
            todo: formData.get('todo')
        })

        const date = new Date().toISOString().split('T')[0];

        await db
            .collection('todos')
            .insertOne({ completed: completed, todo: todo, date: date })

    } catch (e) {

        console.log(e)
    }
}



