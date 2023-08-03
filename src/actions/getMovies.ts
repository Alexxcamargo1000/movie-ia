import { api } from '@/lib/api'

export async function getMovie() {
  const movie = await api
    .get('trending/movie/day', {
      params: { page: '1' },
    })
    .then((res) => res.data)

  return movie
}
