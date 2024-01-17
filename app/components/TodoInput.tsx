export default function TodoInput() {
    return (
        <div className="bg-red-500 mt-11 py-3">
            <form className="flex">
                <div className="basis-[4.5rem] bg-green-500 flex justify-center items-center">
                    <label
                        htmlFor="completed"
                        aria-label="completed"
                        className="bg-blue-500 w-7 h-7 rounded-full"  />
                    <input type="checkbox" name="completed" id="completed" className="appearance-none" />
                </div>
                <input className="w-5/6" type="text" placeholder="Create a new todo..." />
            </form>
        </div>
    )
}
