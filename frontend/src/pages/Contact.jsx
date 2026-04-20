import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false)
    const [isBooking, setIsBooking] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleToggleBooking = () => {
        setIsBooking(!isBooking)
        setFormData((prev) => ({
            ...prev,
            subject: !isBooking ? 'Booking Request' : '',
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error('Please fill in all required fields')
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address')
            return
        }

        setIsLoading(true)

        try {
            // Get existing submissions from localStorage
            const existingSubmissions = JSON.parse(
                localStorage.getItem('contact_submissions') || '[]'
            )

            // Add new submission
            const newSubmission = {
                id: Date.now(),
                ...formData,
                isBooking,
                submittedAt: new Date().toISOString(),
            }

            existingSubmissions.push(newSubmission)

            // Save to localStorage
            localStorage.setItem(
                'contact_submissions',
                JSON.stringify(existingSubmissions)
            )

            toast.success('Message saved successfully! 🎉')
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
            setIsBooking(false)
        } catch (error) {
            console.error('Error saving message:', error)
            toast.error('Failed to save message. Please try again.')
        } finally {
            setIsLoading(false)
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
                    <h1 className="text-5xl font-bold gradient-text mb-4">Get in Touch</h1>
                    <p className="text-xl text-dark-text text-opacity-70">
                        Have a question or ready to book a performance? Reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                        <div className="space-y-6 mb-12">
                            <div className="glass-effect p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                                    <span className="text-2xl">📧</span> Email
                                </h3>
                                <p className="text-dark-text text-opacity-70">
                                    contact@eddyfx.com
                                </p>
                            </div>

                            <div className="glass-effect p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                                    <span className="text-2xl">💬</span> WhatsApp
                                </h3>
                                <p className="text-dark-text text-opacity-70 mb-3">
                                    Chat with me on WhatsApp
                                </p>
                                <a
                                    href="https://wa.me/2340806272432"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Open WhatsApp
                                </a>
                            </div>

                            <div className="glass-effect p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                                    <span className="text-2xl">📱</span> Social Media
                                </h3>
                                <p className="text-dark-text text-opacity-70 mb-3">
                                    Follow for updates and exclusive content
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl hover:text-blue-400 transition-colors"
                                    >
                                        📲
                                    </a>
                                    <a
                                        href="https://tiktok.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl hover:text-blue-400 transition-colors"
                                    >
                                        🎵
                                    </a>
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl hover:text-blue-400 transition-colors"
                                    >
                                        📹
                                    </a>
                                    <a
                                        href="https://audiomack.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl hover:text-blue-400 transition-colors"
                                    >
                                        🔊
                                    </a>
                                </div>
                            </div>

                            <div className="glass-effect p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                                    <span className="text-2xl">⏱️</span> Response Time
                                </h3>
                                <p className="text-dark-text text-opacity-70">
                                    I typically respond within 24-48 hours
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="glass-effect p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/music" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        → Listen to Music
                                    </a>
                                </li>
                                <li>
                                    <a href="/videos" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        → Watch Videos
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        → Learn More About Me
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect p-8 rounded-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Booking Toggle */}
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="isBooking"
                                    checked={isBooking}
                                    onChange={handleToggleBooking}
                                    className="w-5 h-5 cursor-pointer"
                                />
                                <label htmlFor="isBooking" className="cursor-pointer font-semibold">
                                    This is a booking request
                                </label>
                            </div>

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-dark-bg border border-blue-500 border-opacity-30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-dark-bg border border-blue-500 border-opacity-30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={isBooking ? 'Booking Request' : 'What is this about?'}
                                    className="w-full px-4 py-3 bg-dark-bg border border-blue-500 border-opacity-30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                                    disabled={isLoading || isBooking}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or booking request..."
                                    rows="6"
                                    className="w-full px-4 py-3 bg-dark-bg border border-blue-500 border-opacity-30 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isLoading}
                                className={`btn-primary w-full text-center py-3 font-semibold ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isLoading ? (
                                    <span className="inline-flex items-center gap-2">
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            ⏳
                                        </motion.span>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message ✉️'
                                )}
                            </motion.button>

                            <p className="text-xs text-dark-text text-opacity-50">
                                * Required fields
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
