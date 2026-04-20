import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import ShortClipCard from '../components/ShortClipCard'

export default function ShortClips() {
    const [clips, setClips] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchClips()
    }, [])

    const fetchClips = async () => {
        try {
            setLoading(true)
            const response = await fetch('/shorts.json')
            if (!response.ok) throw new Error('Failed to load short clips')
            const data = await response.json()
            setClips(data)
            setError(null)
        } catch (error) {
            console.error('Error fetching clips:', error)
            setError('Failed to load short clips. Please try again later.')
            toast.error('Failed to load short clips')
        } finally {
            setLoading(false)
        }
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
                    <h1 className="text-5xl font-bold gradient-text mb-4">Short Clips</h1>
                    <p className="text-xl text-dark-text text-opacity-70">
                        Quick clips from TikTok, Instagram Reels, and Facebook
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
                            🎬
                        </motion.div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-400 text-lg mb-4">{error}</p>
                        <button
                            onClick={fetchClips}
                            className="btn-primary"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Clips Grid */}
                {!loading && !error && clips.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {clips.map((clip) => (
                            <ShortClipCard key={clip.id} clip={clip} />
                        ))}
                    </motion.div>
                )}

                {/* Empty State */}
                {!loading && !error && clips.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-dark-text text-opacity-70 text-lg">
                            No short clips available yet. Check back soon!
                        </p>
                    </div>
                )}

                {/* Platform Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <a
                        href="https://www.tiktok.com/@eddyfx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-effect p-6 rounded-lg text-center hover:border-blue-400 transition-colors border border-blue-500 border-opacity-20"
                    >
                        <div className="text-5xl mb-3">🎵</div>
                        <h3 className="text-xl font-bold mb-2">TikTok</h3>
                        <p className="text-sm text-dark-text text-opacity-70">
                            Follow for daily content
                        </p>
                    </a>

                    <a
                        href="https://www.instagram.com/eddyfx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-effect p-6 rounded-lg text-center hover:border-blue-400 transition-colors border border-blue-500 border-opacity-20"
                    >
                        <div className="text-5xl mb-3">📸</div>
                        <h3 className="text-xl font-bold mb-2">Instagram Reels</h3>
                        <p className="text-sm text-dark-text text-opacity-70">
                            Behind the scenes & Reels
                        </p>
                    </a>

                    <a
                        href="https://www.facebook.com/eddyfx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-effect p-6 rounded-lg text-center hover:border-blue-400 transition-colors border border-blue-500 border-opacity-20"
                    >
                        <div className="text-5xl mb-3">👍</div>
                        <h3 className="text-xl font-bold mb-2">Facebook</h3>
                        <p className="text-sm text-dark-text text-opacity-70">
                            Connect and share
                        </p>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
