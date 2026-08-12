import React, { useRef, useState } from 'react'
import WeddingWearVideo from "../assets/BannerVideo.mp4"

const Video = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return
    setCurrentTime(video.currentTime)
    setProgress((video.currentTime / video.duration) * 100)
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (!video) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    video.currentTime = newTime
  }

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section className="w-full bg-white px-4 py-10 md:px-10 md:py-14">
      <div className="border-t border-gray-100 pt-8 md:pt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-12">
          {/* Video */}
          <div className="relative w-full overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={WeddingWearVideo}
              autoPlay
              loop
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="h-full w-full object-cover"
            />

            {/* Controls overlay */}
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-white"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xs`}></i>
              </button>

              <span className="text-xs text-white/90">{formatTime(currentTime)}</span>

              <div
                onClick={handleSeek}
                className="relative h-1 flex-1 cursor-pointer bg-white/30"
              >
                <div
                  className="absolute left-0 top-0 h-full bg-white"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <span className="text-xs text-white/90">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col items-start px-2 md:px-4">
         <h2 className="font-serif text-2xl text-gray-900 md:text-3xl">
  Festive Wear
</h2>
<p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
  A curation of flowing silhouettes, sheer layers, and rich textures,
  crafted to add timeless elegance to your most cherished moments.
</p>
            <a
              href="#"
              className="mt-4 text-xs font-semibold tracking-wide text-gray-900 underline underline-offset-4 hover:text-gray-600 md:text-sm"
            >
              EXPLORE MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video