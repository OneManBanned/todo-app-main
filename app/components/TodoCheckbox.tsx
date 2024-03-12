import { SetStateAction, Dispatch, useOptimistic } from "react";
import { updateLocalCompleteStatus } from "../lib/localCRUDfuncs"
import { updateCompletedStatus } from '../lib/todo_actions'
import styles from '@/app/ui/textInput.module.css';
import { UserTodos } from "../lib/types";

export default function TodoCheckbox({todoId, completed, setUserTodos, sessionId}: CheckboxProps) {

    const [optimisticCheck, addOptimisticCheck] = useOptimistic(
        completed,
        (completed) => {
            return !completed
        }
    )
    const updateCompletedStatusWithId: any = updateCompletedStatus.bind(null, [completed, todoId])

        return < div className = { styles.checkbox_container } >
                    <input type="checkbox" name={`completed-${todoId}`} id={`completed-${todoId}`}
                        defaultChecked={optimisticCheck}
                        onClick={() => sessionId
                            ? updateCompletedStatusWithId({})
                            : updateLocalCompleteStatus(setUserTodos, todoId)}
                        className={`${styles.checkbox_input} peer`} />
                    <label htmlFor={`completed-${todoId}`} aria-label="completed"
                        className={optimisticCheck
                            ? `${styles.checked} xsm:w-6 xsm:w-6 w-5 h-5 rounded-full to-gradient-two bg-check-mark border-2 border-none from-gradient-one`
                            : `${styles.checkbox_label} peer-focus:bg-gradient-to-br peer-focus:border-none peer-focus:from-gradient-one 
                            peer-focus:after:w-5 peer-focus:to-gradient-two peer-focus:after:h-5 after:hover:dark:bg-dark 
                            dark:border-dark-border peer-focus:after:bg-white peer-focus:after:absolute peer-focus:after:dark:bg-dark 
                            peer-focus:after:bg-white peer-focus:after:inset-0 peer-focus:after:m-auto peer-focus:after:rounded-full` }>
                    </label>
                </div >
}

type CheckboxProps = {
    todoId: string;
    completed: boolean;
    setUserTodos: Dispatch<SetStateAction<UserTodos[]>>;
    sessionId: string | undefined;
}
