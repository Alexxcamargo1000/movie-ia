'use client'

import { createContext, useState, type ReactNode } from 'react'
import { MovieProps } from './CardMovie'

export const MovieContext = createContext({
  movies: [] as MovieProps[],
})

interface MovieProviderProps {
  children: ReactNode
}

export default function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<MovieProps[]>([])
  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  )
}
