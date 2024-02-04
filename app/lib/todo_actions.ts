'use server'

import dbConnect from './dbConnect';
import Todo from '@/app/lib/todoModel'
import { z } from 'zod';
import { getServerSession } from "next-auth"

const FormSchema = z.object({
    id: z.string(),
    completed: z.coerce.boolean(),
    todo: z.string(),
})

const CreateTodo = FormSchema.omit({ id: true });

export async function createTodo(formData: FormData) {

    const session = await getServerSession()

    console.log(session)

    try {

        dbConnect()

        const { completed, todo } = CreateTodo.parse({
            completed: formData.get('completed'),
            todo: formData.get('todo')
        })

        await Todo.create({ todo: todo, completed: completed})

    } catch (e) {

        console.log(e)

    }
}



