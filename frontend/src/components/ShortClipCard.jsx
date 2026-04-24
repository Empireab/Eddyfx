import { motion } from 'framer-motion'

export default function ShortClipCard({ clip }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-lg overflow-hidden hover:border-blue-400 transition-colors border border-blue-500 border-opacity-20"
        >
            {/* Thumbnail Preview */}
            <div className="relative w-full h-48 bg-dark-bg flex items-center justify-center overflow-hidden group">
                {clip.thumbnail.startsWith('http') ? (
                    <img
                        src={clip.thumbnail}
                        alt={clip.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                ) : null}
                <div className={`text-7xl ${clip.thumbnail.startsWith('http') ? 'hidden' : ''}`}>{clip.thumbnail || '🎵'}</div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <motion.a
                        href={clip.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    >
                        Watch Now →
                    </motion.a>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{clip.title}</h3>
                    <span className="text-xs bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full">
                        {clip.platform}
                    </span>
                </div>
                <p className="text-sm text-dark-text text-opacity-70 mb-4">
                    {clip.description}
                </p>
                <a
                    href={clip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                    Watch full video →
                </a>
            </div>
        </motion.div>
    )
}
