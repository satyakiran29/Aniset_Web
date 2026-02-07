import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '././../../images/logo.jpg';

export default function Header({ darkMode, toggleTheme }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
            style={{
                background: isScrolled ? 'rgba(var(--bg-primary), 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border)' : 'none'
            }}
        >
            <div className="container" style={{ padding: '1rem 1.5rem' }}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Aniset KWGT Logo" className="w-10 h-10 rounded-xl" />
                        <span className="text-xl font-bold gradient-text">Aniset KWGT</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="/#features" className="hover:text-[var(--accent)] transition-colors">Features</a>
                        <Link to="/gallery" className="hover:text-[var(--accent)] transition-colors">Gallery</Link>
                        <a href="#howto" className="hover:text-[var(--accent)] transition-colors">How to Apply</a>
                        <a href="#reviews" className="hover:text-[var(--accent)] transition-colors">Reviews</a>
                        <a href="#purchase" className="hover:text-[var(--accent)] transition-colors text-red-500 font-medium">Notice</a>
                        <a href="#faq" className="hover:text-[var(--accent)] transition-colors">FAQ</a>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a href="https://play.google.com/store/apps/details?id=com.skdev.aniset" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            Download
                        </a>
                    </nav>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg-primary)] border-b border-[var(--border)] p-4 shadow-lg animate-fade-in">
                    <nav className="flex flex-col gap-4">
                        <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                        <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                        <a href="#howto" onClick={() => setIsMobileMenuOpen(false)}>How to Apply</a>
                        <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
                        <a href="#purchase" onClick={() => setIsMobileMenuOpen(false)} className="text-red-500">Notice</a>
                        <button
                            onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                            className="flex items-center gap-2"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
