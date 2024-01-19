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
                        className={styles.checkbox_input}/>
                    <label
                        htmlFor="completed"
                        aria-label="completed"
                        className={styles.checkbox_label}>
                    </label>
                </div>
                <input className={styles.textInput} type="text" placeholder="Create a new todo..." />
            </form>
        </div>
    )
}
