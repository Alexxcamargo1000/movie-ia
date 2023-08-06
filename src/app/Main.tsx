'use client'
import { ButtonSort } from '@/components/ButtonSort'
import { CardMovie, MovieProps } from '@/components/CardMovie'
import { Button } from '@/components/ui/button'
import { getRandomMovies } from '@/utils/randomMovies'
import { Wand } from 'lucide-react'
import { useState } from 'react'

interface MainProps {
  data: MovieProps[]
}

export function Main({ data }: MainProps) {
  const [movies, setMovies] = useState<MovieProps[]>([
    data[0],
    data[1],
    data[2],
  ])

  function handleRandomMovies() {
    const random = getRandomMovies(data)

    setMovies(random)
  }

  return (
    <div className="mx-auto max-w-7xl">
      <header className="py-10 flex flex-wrap justify-between px-8 gap-y-5">
        <h1 className="text-4xl font-bold">Sem ideia do que assistir ?</h1>
        <div>
          <ButtonSort onClick={handleRandomMovies} />
        </div>
      </header>

      <main>
        <div className="flex gap-9 justify-center flex-wrap">
          {movies.map((movie) => {
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
  )
}
