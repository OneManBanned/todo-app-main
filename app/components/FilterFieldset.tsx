import { SetStateAction } from "react"
import styles from '@/app/ui/textInput.module.css'

export default function FilterFieLdset({ filter, setFilter }:
    { filter: string, setFilter: React.Dispatch<SetStateAction<string>> }) {

    return (
        <div className="order-last basis-full grow mid:basis-0">
            <fieldset
                className="rounded-md mid:rounded-none dark:bg-dark flex bg-white justify-center
                 py-3 mid:py-5 justify-evenly px-6 mid:px-6 xsm:px-10">
                <div>
                    <input
                        className="appearance-none"
                        type="radio" id="all" value="all"
                        defaultChecked name="todosFilter"
                        onClick={(e) => setFilter(e.currentTarget.value)} />
                    <label
                        className={filter == 'all' 
                            ? 'text-blue-splash' 
                            : `${styles.filter_labels} text-[#9394a5] hover:dark:text-white dark:text-dark-border`}
                        htmlFor="all">All</label>
                </div>
                <div>
                    <input type="radio" id="active"
                        className="appearance-none"
                        name="todosFilter" value="active"
                        onClick={(e: any) => setFilter(e.currentTarget.value)} />
                    <label
                        className={filter == 'active' 
                            ? 'text-blue-splash' 
                            : `${styles.filter_labels} text-[#9394a5] hover:dark:text-white dark:text-dark-border`}
                        htmlFor="active">Active</label>
                </div>
                <div>
                    <input type="radio" id="done"
                        className="appearance-none"
                        name="todosFilter" value="done"
                        onClick={(e: any) => setFilter(e.currentTarget.value)} />
                    <label
                        className={filter == 'done' 
                            ? 'text-blue-splash' 
                            : `${styles.filter_labels} text-[#9394a5] hover:dark:text-white dark:text-dark-border`}
                        htmlFor="done">Completed</label>
                </div>
            </fieldset>
        </div>
    )
}
