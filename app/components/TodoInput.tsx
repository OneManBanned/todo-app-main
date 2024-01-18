export default function TodoInput() {
    return (
        <div className="bg-white dark:bg-dark mt-11 py-3 rounded-md">
            <form className="flex">
                <div className="basis-[4.5rem] flex justify-center items-center">
                    <input type="checkbox" name="completed" id="completed" className="appearance-none peer" />
                    <label
                        htmlFor="completed"
                        aria-label="completed"
                        className="w-6 h-6 rounded-full border-2 border-{hsl(236, 33%, 92%)} peer-focus:bg-red-400"  />
                </div>
                <input className="w-5/6 me-3 font-normal outline-offset-4 text-sm dark:bg-dark" type="text" placeholder="Create a new todo..." />
            </form>
        </div>
    )
}
