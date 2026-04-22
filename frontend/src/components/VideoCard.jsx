import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import RatingStars from './RatingStars'

export default function VideoCard({ video, onRatingAdded }) {
    const [rating, setRating] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [videoData, setVideoData] = useState(video)

    // Load ratings from localStorage on mount
    useEffect(() => {
        const storedRatings = localStorage.getItem(`video_${video.id}`)
        if (storedRatings) {
            const updatedVideo = { ...video, ratings: JSON.parse(storedRatings) }
            setVideoData(updatedVideo)
        }
    }, [video.id])

    const avgRating =
        videoData.ratings.length > 0
            ? (
                videoData.ratings.reduce((sum, r) => sum + r.rating, 0) /
                videoData.ratings.length
            ).toFixed(1)
            : 0

    const handleRate = (newRating) => {
        setRating(newRating)
        setIsSubmitting(true)

        try {
            // Add new rating to ratings array
            const updatedRatings = [
                ...videoData.ratings,
                { rating: newRating, createdAt: new Date().toISOString() }
            ]

            // Save to localStorage
            localStorage.setItem(`video_${video.id}`, JSON.stringify(updatedRatings))

            // Update component state
            const updatedVideo = { ...videoData, ratings: updatedRatings }
            setVideoData(updatedVideo)

            toast.success('Rating submitted! 🎉')
            if (onRatingAdded) {
                onRatingAdded(updatedVideo)
            }
            setRating(0)
        } catch (error) {
            toast.error('Failed to submit rating')
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Extract YouTube video ID
    const getYouTubeId = (url) => {
        const regex =
            /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
        const match = url.match(regex)
        return match ? match[1] : null
    }

    const youtubeId = getYouTubeId(videoData.youtubeLink)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect overflow-hidden card-hover"
        >
            {/* Thumbnail / Video Preview */}
            <div className="relative h-48 overflow-hidden bg-dark-bg">
                {youtubeId ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={videoData.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="hover:scale-110 transition-transform duration-300"
                    />
                ) : (
                    <img
                        src={videoData.thumbnail}
                        alt={videoData.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{videoData.title}</h3>
                <p className="text-dark-text text-opacity-70 text-sm mb-4 line-clamp-2">
                    {videoData.description}
                </p>

                {/* Rating Display */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">⭐</span>
                        <span className="font-semibold">{avgRating}</span>
                        <span className="text-dark-text text-opacity-50 text-sm">
                            ({videoData.ratings.length})
                        </span>
                    </div>
                </div>

                {/* Rating Stars */}
                <div className="mb-4">
                    <p className="text-sm text-dark-text text-opacity-70 mb-2">Rate this video:</p>
                    <RatingStars
                        onRate={handleRate}
                        isSubmitting={isSubmitting}
                        size="sm"
                    />
                </div>

                {/* Watch Button */}
                <a
                    href={videoData.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                >
                    Watch on YouTube 📹
                </a>
            </div>
        </motion.div>
    )
}
