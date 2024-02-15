'use server'

import dbConnect from './dbConnect';
import Todo from '@/app/lib/todoModel';
import User from '@/app/lib/userModel';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const FormSchema = z.object({
    id: z.string(),
    completed: z.coerce.boolean(),
    todo: z.string(),
})

const CreateTodo = FormSchema.omit({ id: true });


export async function createTodo(formData: FormData) {

    const session = await getServerSession(authOptions)
    const user = session?.user;
    const id = user?.id

    try {

        dbConnect()

        const { completed, todo } = CreateTodo.parse({
            completed: formData.get('completed'),
            todo: formData.get('todo')
        })

        const newTodo = await Todo.create({
            todo: todo,
            completed: completed
        })

        await User.findByIdAndUpdate(id,
            { $push: { todos: newTodo._id } },
            { new: true, useFindAndModify: false }
        )


    } catch (e) {

        console.log(e)

    }

}

export async function updateCompletedStatus(params) {
    console.log("Hello, from inside updateCompetedStatus", '\n')
    dbConnect()

    const [completed, todoId] = params

    try {
        
       const updatedTodo = await Todo
            .findOneAndUpdate(
                {_id: todoId}, 
                {completed: !completed}
            )

        console.log(updatedTodo)
                    

    } catch(e) {

        console.log(e)

    }
}


export async function deleteTodo(params) { 

    const [sessionId, todoId] = params

    dbConnect()

    try {

         await User.updateOne({_id: sessionId}, {
            $pullAll: {
                todos: [todoId],
            },
        })

        const todo = await Todo.deleteOne({_id: todoId})

    } catch(e) {
        
        console.log(e)

    }

    console.log("HIT")

}
