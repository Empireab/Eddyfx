import { motion } from 'framer-motion'

export default function About() {
    const achievements = [
        '🏆 Multiple Award Nominations',
        '🎤 hundreds of live performances',
        '🌍 International Recognition',
        '💾 Millions of streams',
        '📺 Featured on major platforms',
        '🎵 Award-Winning Producer',
    ]

    return (
        <div className="min-h-screen py-20">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold gradient-text mb-4">About EDDYFX</h1>
                    <p className="text-xl text-dark-text text-opacity-70">
                        Discover the story behind the music
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image / Avatar Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-80 h-80 rounded-2xl overflow-hidden glass-effect p-2">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-8xl">
                                🎵
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Who Is EDDYFX?</h2>
                        <p className="text-lg text-dark-text text-opacity-80 mb-4 leading-relaxed">
                            EDDYFX is a visionary music artist and producer with a passion for creating innovative sounds that resonate with audiences worldwide. With a background in music production and composition, EDDYFX has carved out a unique space in the music industry.
                        </p>
                        <p className="text-lg text-dark-text text-opacity-80 mb-4 leading-relaxed">
                            Known for blending multiple genres and creating emotionally resonant tracks, EDDYFX's music has touched millions of listeners across streaming platforms. Each track tells a story, each beat carries purpose.
                        </p>
                        <p className="text-lg text-dark-text text-opacity-80 leading-relaxed">
                            Beyond the studio, EDDYFX is committed to connecting with fans through live performances, collaborations, and creative projects that push the boundaries of contemporary music.
                        </p>
                    </motion.div>
                </div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                        Achievements & Recognition
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-effect p-6 rounded-lg card-hover"
                            >
                                <p className="text-xl font-semibold text-center">
                                    {achievement}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { label: 'Years Active', value: '5+' },
                        { label: 'Tracks Released', value: '50+' },
                        { label: 'Total Streams', value: '10M+' },
                        { label: 'Countries', value: '30+' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-effect p-6 text-center card-hover"
                        >
                            <p className="text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </p>
                            <p className="text-dark-text text-opacity-70">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="glass-effect p-12 text-center rounded-2xl"
                >
                    <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
                    <p className="text-lg text-dark-text text-opacity-70 mb-6">
                        Whether it's collaborations, bookings, or features, let's create something amazing together.
                    </p>
                    <a href="/contact" className="btn-primary">
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
