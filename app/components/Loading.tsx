import styles from '@/app/ui/textInput.module.css'

export default function Loading() {
    return <div className={styles.checkbox_container}>
        <input disabled
            className={`${styles.checkbox_input} peer`} />
        <label>
        THIS IS SUSPENDED
        </label>
    </div>
}
