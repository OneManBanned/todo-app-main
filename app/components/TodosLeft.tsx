import { UserTodos } from "../lib/types"

export default function TodosLeft({ userTodos }: { userTodos: UserTodos[] }) {
    return <>
        <p className='mid:order-first rounded-l-md mid:rounded-bl-md mid: rounded-tl-none mb-6 mid:m-0 bg-white dark:bg-dark shrink
                   font-normal text-sm xsm:text-base mt-auto flex text-[#9394a5] items-center dark:text-dark-border py-4 ps-4'>
            {userTodos.length == 1
                ? `${userTodos.length} item left`
                : `${userTodos.length} items left`}
        </p>
    </>
}
