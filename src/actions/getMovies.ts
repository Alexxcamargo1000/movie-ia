import { MovieProps } from '@/components/CardMovie'
import { api } from '@/lib/api'

export async function getMovie() {
  const randomPage = Math.floor(Math.random() * 100) + 1
  const data = await api
    .get('trending/movie/day', {
      params: { page: randomPage, language: 'pt-BR' },
    })
    .then((res) => res.data)

  if (data.results.length < 1) {
    return []
  }

  const movies: MovieProps[] = data.results

  return movies
}
