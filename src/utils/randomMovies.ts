import { MovieProps } from '@/components/CardMovie'

export function getRandomMovies(movies: MovieProps[]) {
  const randomMovies = movies
    .sort(() => Math.random() - Math.random())
    .slice(0, 3)

  return randomMovies
}
