'use client'
import { Clock, CalendarDays, PlayCircle } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { api } from '@/lib/api'
import { useState } from 'react'
import { useToast } from './ui/use-toast'

export interface MovieProps {
  id: number
  title: string
  poster_path: string
  overview: string
  release_date: string
  runtime: number
}

export function CardMovie(props: MovieProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleTrailer() {
    setIsLoading(true)
    const video = await api
      .get(`movie/${props.id}/videos`, {
        params: { language: 'pt-BR' },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      })
      .then((res) => res.data)

    setIsLoading(false)
    if (video.results.length === 0) {
      toast({
        title: 'Trailer não encontrado',
        variant: 'destructive',
      })
      return
    }

    const videoKey: string = video.results[0].key

    if (!videoKey) {
      toast({
        title: 'Trailer não encontrado',
        variant: 'destructive',
      })
      return
    }

    window.open(`https://www.youtube.com/watch?v=${videoKey}`, '_blank')
  }

  const overview =
    props.overview.length > 100
      ? props.overview.substring(0, 100) + '...'
      : props.overview

  return (
    <div className="max-w-xs">
      <strong
        title={props.title}
        className="font-bold text-xl text-center block mb-3 truncate"
      >
        {props.title.length < 10 ? props.title : props.title}
      </strong>

      <div className="rounded-lg overflow-hidden w-80 max-h-[420px] shadow">
        <Image
          alt="movie"
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          width={500}
          className="object-cover w-80 max-h-[420px]"
          height={500}
          quality={100}
        />
      </div>

      <div className="flex justify-between text-zinc-400">
        <div className="mt-4 flex  gap-2 items-center">
          <Clock className="h-4 w-4" />
          <span className="font-mono text-sm font-thin">1:54:00</span>
        </div>
        <div className="mt-4 flex  gap-2 items-center">
          <CalendarDays className="h-4 w-4" />
          <span className="font-mono text-sm font-thin">1:54:00</span>
        </div>
      </div>

      <div className="min-h-[60px]">
        <p className="mt-4 text-sm text-zinc-100">{overview}</p>
      </div>

      <Button
        disabled={isLoading}
        onClick={handleTrailer}
        className="w-full bg-emerald-800 hover:bg-emerald-700 mt-6"
      >
        <PlayCircle className="mr-3" />
        Trailer
      </Button>
    </div>
  )
}
