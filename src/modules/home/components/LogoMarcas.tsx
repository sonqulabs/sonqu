'use client'

import React, { useEffect, useState, useCallback } from 'react'

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 3000 // Aumentar el intervalo para ralentizar
  const columnDelay = index * 300 // Aumentar el retraso por columna
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)

  return (
    <div className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48">
      <div
        className="duration-[1000ms] absolute inset-0 flex flex-col items-center justify-start transition-transform ease-out" // Suavizar la transición
        style={{
          transform: `translateY(-${currentIndex * 100}%)`
        }}
      >
        {logos.map((Logo, i) => (
          <div
            key={`${Logo.id}-${i}`}
            className="flex h-14 w-24 items-center justify-center md:h-24 md:w-48"
          >
            <Logo.img className="h-20 max-h-[80%] w-20 max-w-[80%] object-contain md:h-32 md:w-32" />
          </div>
        ))}
      </div>
    </div>
  )
})

LogoColumn.displayName = 'LogoColumn'

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
      ))}
    </div>
  )
}

LogoCarousel.displayName = 'LogoCarousel'

export { LogoColumn }
