'use client'

import { getMovie } from '@/actions/getMovies'
import { MovieProps } from '@/components/CardMovie'
import { createContext, useContext, useEffect, useState } from 'react'

async function getMovies() {
  'use server'
  const movies = await getMovie()
  return movies
}

const MovieContext = createContext({})

export function Movie() {
  const [movie, setMovie] = useState<MovieProps[]>([])

  useEffect(() => {
    async function loadMovies() {
      const data = await getMovies()
      setMovie(data)
    }

    loadMovies()
  }, [])

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {<Movie />}
    </MovieContext.Provider>
  )
}
