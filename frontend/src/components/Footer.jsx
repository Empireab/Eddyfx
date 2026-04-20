import { motion } from 'framer-motion'

export default function Footer() {
    const socialLinks = [
        { icon: '📲', name: 'Instagram', url: 'https://instagram.com' },
        { icon: '🎵', name: 'TikTok', url: 'https://tiktok.com' },
        { icon: '🔊', name: 'Audiomack', url: 'https://audiomack.com' },
        { icon: '📹', name: 'YouTube', url: 'https://youtube.com' },
    ]

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-card border-t border-blue-500 border-opacity-20 py-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-2">EDDYFX</h3>
                        <p className="text-dark-text text-opacity-70">
                            Official music artist website. Stream, connect, and book performances.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-dark-text text-opacity-70">
                            <li>
                                <a href="/music" className="hover:text-blue-400 transition-colors">
                                    Music
                                </a>
                            </li>
                            <li>
                                <a href="/videos" className="hover:text-blue-400 transition-colors">
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-blue-400 transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-bold mb-4">Follow</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-2xl hover:text-blue-400 transition-colors"
                                    title={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-blue-500 border-opacity-20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-dark-text text-opacity-70 text-sm">
                            © {currentYear} EDDYFX. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-dark-text text-opacity-70">
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
