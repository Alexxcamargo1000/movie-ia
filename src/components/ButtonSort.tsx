'use client'
import { Film } from 'lucide-react'
import { Button, type ButtonProps } from './ui/button'
import { getRandomMovies } from '@/utils/randomMovies'
import { MovieProps } from '@/components/CardMovie'

interface ButtonSortProps extends ButtonProps {
  movies: MovieProps[]
}

export function ButtonSort({ movies, ...props }: ButtonSortProps) {
  function handleRandomMovies() {
    getRandomMovies(movies)
  }

  return (
    <Button onClick={handleRandomMovies} {...props} size={'lg'}>
      <Film className="mr-2 h-4 w-4" />
      Sortear
    </Button>
  )
}
