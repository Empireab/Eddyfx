import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import RatingStars from './RatingStars'

export default function MusicCard({ music, onRatingAdded }) {
    const [rating, setRating] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [musicData, setMusicData] = useState(music)

    // Load ratings from localStorage on mount
    useEffect(() => {
        const storedRatings = localStorage.getItem(`music_${music.id}`)
        if (storedRatings) {
            const updatedMusic = { ...music, ratings: JSON.parse(storedRatings) }
            setMusicData(updatedMusic)
        }
    }, [music.id])

    const avgRating =
        musicData.ratings.length > 0
            ? (
                musicData.ratings.reduce((sum, r) => sum + r.rating, 0) /
                musicData.ratings.length
            ).toFixed(1)
            : 0

    const handleRate = (newRating) => {
        setRating(newRating)
        setIsSubmitting(true)

        try {
            // Add new rating to ratings array
            const updatedRatings = [
                ...musicData.ratings,
                { rating: newRating, createdAt: new Date().toISOString() }
            ]

            // Save to localStorage
            localStorage.setItem(`music_${music.id}`, JSON.stringify(updatedRatings))

            // Update component state
            const updatedMusic = { ...musicData, ratings: updatedRatings }
            setMusicData(updatedMusic)

            toast.success('Rating submitted! 🎉')
            if (onRatingAdded) {
                onRatingAdded(updatedMusic)
            }
            setRating(0)
        } catch (error) {
            toast.error('Failed to submit rating')
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect overflow-hidden card-hover"
        >
            {/* Cover Image */}
            <div className="relative h-48 overflow-hidden bg-dark-bg">
                <img
                    src={musicData.coverImage}
                    alt={musicData.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{musicData.title}</h3>
                <p className="text-dark-text text-opacity-70 mb-4">{musicData.artist}</p>

                {/* Rating Display */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">⭐</span>
                        <span className="font-semibold">{avgRating}</span>
                        <span className="text-dark-text text-opacity-50 text-sm">
                            ({musicData.ratings.length})
                        </span>
                    </div>
                </div>

                {/* Rating Stars */}
                <div className="mb-4">
                    <p className="text-sm text-dark-text text-opacity-70 mb-2">Rate this song:</p>
                    <RatingStars
                        onRate={handleRate}
                        isSubmitting={isSubmitting}
                        size="sm"
                    />
                </div>

                {/* Listen Button */}
                <a
                    href={musicData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                >
                    Listen on Audiomack 🎵
                </a>
            </div>
        </motion.div>
    )
}
