import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button variant="defaultOutline">
          <Image 
            src="/hr.svg" 
            alt='hr' 
            height={32} 
            width={40} 
            className='mr-4 rounded-md' 
          />
          Croatian
        </Button>
        <Button variant="defaultOutline">
          <Image 
            src="/es.svg" 
            alt='es' 
            height={32} 
            width={40} 
            className='mr-4 rounded-md' 
          />
          Spanish
        </Button>
        <Button variant="defaultOutline">
          <Image 
            src="/it.svg" 
            alt='it' 
            height={32} 
            width={40} 
            className='mr-4 rounded-md' 
          />
          Italian
        </Button>
        <Button variant="defaultOutline">
          <Image 
            src="/fr.svg" 
            alt='fr' 
            height={32} 
            width={40} 
            className='mr-4 rounded-md' 
          />
          French
        </Button>
        <Button variant="defaultOutline">
          <Image 
            src="/jp.svg" 
            alt='jp' 
            height={32} 
            width={40} 
            className='mr-4 rounded-md' 
          />
          Japanese
        </Button>
      </div>
    </footer>
  )
}
