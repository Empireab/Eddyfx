import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/music', label: 'Music' },
        { path: '/videos', label: 'Videos' },
        { path: '/shorts', label: 'Shorts' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <nav className="sticky top-0 z-50 glass-effect backdrop-blur-lg">
            <div className="container-custom">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <motion.img
                            src="/edddylogo.jpeg"
                            alt="Logo"
                            whileHover={{ scale: 1.05 }}
                            className="h-16 w-auto rounded-full"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-semibold transition-colors duration-300 ${isActive(link.path) ? 'text-blue-400' : 'hover:text-blue-400'
                                    }`}
                            >
                                {link.label}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={`w-6 h-0.5 bg-blue-400 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <div
                            className={`w-6 h-0.5 bg-blue-400 transition-all ${isOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <div
                            className={`w-6 h-0.5 bg-blue-400 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden pb-4 space-y-2 overflow-hidden"
                        >
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-2 rounded-lg ${isActive(link.path)
                                            ? 'bg-blue-600 text-white'
                                            : 'hover:bg-dark-card'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}
