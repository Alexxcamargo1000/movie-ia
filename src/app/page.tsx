import { getMovie } from '@/actions/getMovies'

export default async function Home() {
  const movie = await getMovie()
  console.log(movie)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-7xl">
        <header className="py-10">
          <h1 className="text-4xl font-bold">Sem ideia do que assistir ?</h1>

          {movie.results.map((movie) => (
            <div key={movie.id}>
              <span>{movie.title}</span>
            </div>
          ))}
        </header>
      </div>
    </div>
  )
}
