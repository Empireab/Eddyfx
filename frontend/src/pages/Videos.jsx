import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import VideoCard from '../components/VideoCard'

export default function Videos() {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchVideos()
    }, [])

    const fetchVideos = async () => {
        try {
            setLoading(true)
            const response = await fetch('/videos.json')
            if (!response.ok) throw new Error('Failed to load videos')
            const data = await response.json()
            setVideos(data)
            setError(null)
        } catch (error) {
            console.error('Error fetching videos:', error)
            setError('Failed to load videos. Please try again later.')
            toast.error('Failed to load videos')
        } finally {
            setLoading(false)
        }
    }

    const handleRatingAdded = (updatedVideo) => {
        setVideos(
            videos.map((v) =>
                v.id === updatedVideo.id ? updatedVideo : v
            )
        )
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold gradient-text mb-4">Videos</h1>
                    <p className="text-xl text-dark-text text-opacity-70">
                        Watch exclusive video content and performances
                    </p>
                </motion.div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center min-h-96">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="text-6xl"
                        >
                            📹
                        </motion.div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-400 text-lg mb-4">{error}</p>
                        <button
                            onClick={fetchVideos}
                            className="btn-primary"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Videos Grid */}
                {!loading && !error && videos.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                onRatingAdded={handleRatingAdded}
                            />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && videos.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl text-dark-text text-opacity-70 mb-4">
                            No videos available yet.
                        </p>
                        <p className="text-dark-text text-opacity-50">
                            Check back soon for video content!
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
