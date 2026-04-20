import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function RatingStars({ onRate, isSubmitting = false, size = 'md' }) {
    const [hoverRating, setHoverRating] = useState(0)
    const containerRef = useRef(null)

    const sizeClass = {
        sm: 'text-lg',
        md: 'text-3xl',
        lg: 'text-4xl',
    }[size]

    const handleMouseLeave = () => {
        if (containerRef.current) {
            setHoverRating(0)
        }
    }

    return (
        <div className="flex gap-2" ref={containerRef} onMouseLeave={handleMouseLeave}>
            {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => !isSubmitting && onRate(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    disabled={isSubmitting}
                    className={`${sizeClass} transition-all cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {star <= hoverRating ? '⭐' : '☆'}
                </motion.button>
            ))}
        </div>
    )
}
