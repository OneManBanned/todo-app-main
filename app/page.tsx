import clientPromise from "./lib/mongodb"

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


  console.log('hi', movieData?.props.movie.title)

  return (
    <main>
      <h1>{movieData?.props.movie.title}</h1>
    </main>
  )
}
