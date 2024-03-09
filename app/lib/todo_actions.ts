'use server'

import dbConnect from './dbConnect';
import Todo from '@/app/lib/todoModel';
import User from '@/app/lib/userModel';
import { z } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { revalidatePath } from 'next/cache'

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

    revalidatePath('/', 'page')

}

export async function updateCompletedStatus(params: any) {

    dbConnect()

    const [completed, todoId] = params

    try {

        await Todo.findOneAndUpdate({ _id: todoId }, { completed: !completed })

    } catch (e) {

        console.log(e)

    }

    revalidatePath('/', 'page')
}


export async function deleteTodo(params: any) {

    const [sessionId, todoId] = params

    dbConnect()

    try {

        await User.updateOne({ _id: sessionId },
            {
                $pullAll: { todos: [todoId], },
            })

        await Todo.deleteOne({ _id: todoId })

    } catch (e) {

        console.log(e)

    }

    revalidatePath('/', 'page')

}

export async function deleteCompletedDatabaseTodos(params: any) {

    const [sessionId] = params

    dbConnect()

    try {

        const populatedUser = await User.findById(sessionId)
            .populate({
                path: "todos",
                select: "todos",
                model: Todo,
                match: { completed: true }
            })


        await Todo.deleteMany({
            _id: { $in: populatedUser.todos }

        })

        let result = populatedUser.todos.map((todo: any) => todo._id )

        await User.updateOne({_id: sessionId}, {
            $pullAll: { todos:  result  }
        })

    } catch (e) {

        console.log(e)

    }

    revalidatePath('/', 'page')

}
