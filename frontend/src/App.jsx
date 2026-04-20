import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Music from './pages/Music'
import Videos from './pages/Videos'
import ShortClips from './pages/ShortClips'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-dark-bg text-dark-text">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/shorts" element={<ShortClips />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <Toaster position="bottom-right" />
            </div>
        </Router>
    )
}

export default App
