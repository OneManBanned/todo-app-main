import clientPromise from "./lib/mongodb"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"

async function read() {
    'use server'

    try {
        const client = await clientPromise
        const db = client.db("sample_mflix")

        const movie = await db
            .collection("movies")
            .findOne({ "title": "The Great Train Robbery" })

        return {
            props: { movie: JSON.parse(JSON.stringify(movie)) }
        }

    } catch (e) {
        console.error(e)
    }
}

export default async function Home() {

    const movieData = await read()

    return (
        <div className=" xsm:container xsm:mx-auto mx-6 xsm:max-w-[33rem] xsm:w-5/6 py-2">
            <Header />
            <TodoInput /> 
            <main></main>
        </div>
    )
}
