import { SetStateAction } from "react"

export default function FilterFieldset({ setFilter }: { setFilter: React.Dispatch<SetStateAction<string>> }) {

    return (
        <div>
            <fieldset>
                <div>
                    <input
                        type="radio" id="all" value="all"
                        defaultChecked name="todosFilter"
                        onClick={(e) => setFilter(e.currentTarget.value)} />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="radio" id="active"
                        name="todosFilter" value="active"
                        onClick={(e: any) => setFilter(e.currentTarget.value)} />
                    <label htmlFor="active">Active</label>
                </div>
                <div>
                    <input type="radio" id="done"
                        name="todosFilter" value="done"
                        onClick={(e: any) => setFilter(e.currentTarget.value)} />
                    <label htmlFor="done">Completed</label>
                </div>
            </fieldset>
        </div>
    )
}
