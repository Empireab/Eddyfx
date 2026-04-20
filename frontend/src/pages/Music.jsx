import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import MusicCard from '../components/MusicCard'

export default function Music() {
    const [music, setMusic] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchMusic()
    }, [])

    const fetchMusic = async () => {
        try {
            setLoading(true)
            const response = await fetch('/music.json')
            if (!response.ok) throw new Error('Failed to load music')
            const data = await response.json()
            setMusic(data)
            setError(null)
        } catch (error) {
            console.error('Error fetching music:', error)
            setError('Failed to load music. Please try again later.')
            toast.error('Failed to load music')
        } finally {
            setLoading(false)
        }
    }

    const handleRatingAdded = (updatedMusic) => {
        setMusic(
            music.map((m) =>
                m.id === updatedMusic.id ? updatedMusic : m
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
                    <h1 className="text-5xl font-bold gradient-text mb-4">My Music</h1>
                    <p className="text-xl text-dark-text text-opacity-70">
                        Stream all my latest tracks and exclusive releases
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
                            🎵
                        </motion.div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-400 text-lg mb-4">{error}</p>
                        <button
                            onClick={fetchMusic}
                            className="btn-primary"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Music Grid */}
                {!loading && !error && music.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {music.map((track) => (
                            <MusicCard
                                key={track.id}
                                music={track}
                                onRatingAdded={handleRatingAdded}
                            />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && music.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl text-dark-text text-opacity-70 mb-4">
                            No music available yet.
                        </p>
                        <p className="text-dark-text text-opacity-50">
                            Check back soon for new releases!
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
