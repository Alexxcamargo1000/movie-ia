'use client'
import { Film } from 'lucide-react'
import { Button, type ButtonProps } from './ui/button'

type ButtonSortProps = ButtonProps

export function ButtonSort({ ...props }: ButtonSortProps) {
  return (
    <Button {...props} size={'lg'}>
      <Film className="mr-2 h-4 w-4" />
      Sortear
    </Button>
  )
}
