import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import mockup from '././../../images/aniset.png';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-sm font-medium mb-6 text-[var(--accent)]">
                            🚀 Aniset Pro Coming Soon...
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Anime Widgets for Your <span className="gradient-text">Home Screen</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-lg mx-auto md:mx-0">
                            Transform your Android device with Aniset KWGT. Over 100+ premium, customizable widgets featuring your favorite anime styles.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="https://play.google.com/store/apps/details?id=aniset.kwgt" className="btn btn-primary min-w-[200px] justify-center">
                                <Download size={20} />
                                Download App
                            </a>
                            <Link to="/pro" className="btn bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 border-none min-w-[200px] justify-center">
                                ⚡ Aniset Pro
                            </Link>
                            <Link to="/gallery" className="btn btn-secondary min-w-[160px] justify-center">
                                View Widgets
                                <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center gap-4 justify-center md:justify-start text-sm text-[var(--text-secondary)]">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-[var(--bg-primary)]"></div>
                                ))}
                            </div>
                            <p>Trusted by 10k+ users</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Mockup Placeholder */}
                        <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[2.5rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                            <img
                                src={mockup}
                                alt="App Screenshot"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -right-4 top-20 bg-[var(--card-bg)] p-3 rounded-lg shadow-xl border border-[var(--border)]"
                        >
                            <span className="text-2xl">🎨</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                            className="absolute -left-4 bottom-32 bg-[var(--card-bg)] p-3 rounded-lg shadow-xl border border-[var(--border)]"
                        >
                            <span className="text-2xl">🎵</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
