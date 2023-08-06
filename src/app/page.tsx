import { getMovie } from '@/actions/getMovies'

import { Main } from './Main'

export default async function Home() {
  const movies = await getMovie()

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pb-40">
      <Main data={movies} />
    </div>
  )
}
