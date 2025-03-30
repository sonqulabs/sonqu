'use client'
// import { useEffect } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function getYouTubeID(url: string): string {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url?.match(regex)
  return match ? match[1] : ''
}

const YoutubeLite = ({ url }) => {
  if (!url) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-[#000000cc] shadow-md">
        no hay video
      </div>
    )
  }

  return (
    <LiteYouTubeEmbed
      id={getYouTubeID(url)}
      wrapperClass="yt-lite rounded-lg border border-[#000000cc] shadow-md"
      title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  )
}

export default YoutubeLite
