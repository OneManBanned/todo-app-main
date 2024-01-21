import styles from '@/app/ui/textInput.module.css'

export default function TodoInput() {
    return (
        <div className="bg-white dark:bg-dark mt-11 xsm:py-4 py-3 rounded-md">
            <form className="flex">
                <div className={styles.checkbox_container}>
                    <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        className={`${styles.checkbox_input} peer`}/>
                    <label
                    htmlFor="completed" 
                    aria-label="completed" 
                    className={`${styles.checkbox_label} peer-focus:bg-blue-splash after:hover:dark:bg-dark dark:border-dark-border`} >
                    </label>
                </div>
                <input className={`${styles.textInput} dark:text-dark-text dark:border-blue-splash dark:bg-dark`} type="text" placeholder="Create a new todo..." />
            </form>
        </div>
    )
}
