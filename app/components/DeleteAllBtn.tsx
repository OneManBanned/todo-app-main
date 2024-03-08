import { deleteCompletedDatabaseTodos } from '../lib/todo_actions';
import { deleteCompletedLocalTodos } from '../lib/localCRUDfuncs';
import { SetStateAction } from 'react';
import { UserTodos } from '../lib/types';


export default function DeleteAllBtn({ sessionId, setUserTodos }:
    { sessionId: string | undefined, setUserTodos: React.Dispatch<SetStateAction<UserTodos[]>> }) {

    const deleteDatabaseTodos: any = deleteCompletedDatabaseTodos.bind(null, [sessionId])

    return <button
        onClick={() => sessionId
            ? deleteDatabaseTodos({})
            : deleteCompletedLocalTodos(setUserTodos)
        }
        className='mid:order-last rounded-r-md mid:rounded-br-md mid: rounded-tr-none mid:m-0 mb-6 bg-white dark:bg-dark grow text-right 
                    mid:grow-0 shrink font-normal xsm:text-base text-sm text-[#9394a5] dark:text-dark-border py-4 pe-4'>
        Clear Completed
    </button>
}
