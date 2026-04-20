import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Local hero images from frontend/public/hero folder
    const heroImages = [
        '/hero/eddyfx1.jpeg',
        '/hero/eddyfx2.jpeg',
        '/hero/eddyfx3.jpeg',
    ]

    // Rotate images every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
        }, 10000)

        return () => clearInterval(interval)
    }, [heroImages.length])

    const features = [
        { icon: '🎵', title: 'Stream Music', description: 'Listen to the latest tracks' },
        { icon: '📹', title: 'Watch Videos', description: 'Exclusive video content' },
        { icon: '📬', title: 'Book Now', description: 'Request booking & features' },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-dark-bg">
                {/* Background Images Carousel */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    {heroImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Hero ${index + 1}`}
                            className={`absolute w-3/4 h-auto max-h-[600px] object-contain transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>

                <div className="container-custom text-center z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
                            EDDYFX
                        </h1>
                        <p className="text-xl md:text-2xl text-dark-text text-opacity-80 mb-8">
                            🎶 Music Artist | Producer | Creative
                        </p>
                        <p className="text-lg text-dark-text text-opacity-70 max-w-2xl mx-auto mb-8">
                            Discover exclusive music, captivating videos, and connect with the creative journey of a modern music artist.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                    >
                        <Link to="/music" className="btn-primary">
                            Listen Now 🎧
                        </Link>
                        <Link to="/contact" className="btn-secondary">
                            Book a Performance
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-dark-card bg-opacity-50">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold text-center mb-16 gradient-text"
                    >
                        What You'll Find Here
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-effect p-8 text-center card-hover"
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-dark-text text-opacity-70">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Music Preview */}
            <section className="py-20">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold text-center mb-16 gradient-text"
                    >
                        Latest Releases
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="glass-effect p-6 card-hover"
                            >
                                <div className="h-40 bg-dark-bg rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-5xl">🎵</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Song Title {item}</h3>
                                <p className="text-dark-text text-opacity-70 mb-4">
                                    Experience the latest track from EDDYFX
                                </p>
                                <Link to="/music" className="btn-primary inline-block">
                                    Explore Music
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-20">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
                        <p className="text-xl text-dark-text text-opacity-80 mb-8 max-w-2xl mx-auto">
                            Get in touch for bookings, collaborations, or just to say hello!
                        </p>
                        <Link to="/contact" className="btn-primary text-lg">
                            Send a Message ✉️
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
