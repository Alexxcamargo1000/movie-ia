import { getMovie } from '@/actions/getMovies'
import { ButtonSort } from '@/components/ButtonSort'
import { CardMovie } from '@/components/CardMovie'
import { Button } from '@/components/ui/button'
import { getRandomMovies } from '@/utils/randomMovies'
import { Film, Wand } from 'lucide-react'
import { Suspense } from 'react'

export default async function Home() {
  const movies = await getMovie()

  const randomMovie = getRandomMovies(movies)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pb-40">
      <div className="mx-auto max-w-7xl">
        <header className="py-10 flex justify-between">
          <h1 className="text-4xl font-bold">Sem ideia do que assistir ?</h1>
          <div>
            <ButtonSort movies={randomMovie} />
            <Button variant={'link'} className="ml-4 text-zinc-100">
              <Wand className="mr-2 h-4 w-4" />
              IA tool
            </Button>
          </div>
        </header>

        <main>
          <div className="flex gap-9 justify-center flex-wrap">
            {randomMovie.map((movie) => {
              return (
                <CardMovie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  overview={movie.overview}
                  release_date={movie.release_date}
                  runtime={movie.runtime}
                />
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
