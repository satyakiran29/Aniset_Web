import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const screenshots = [
    "https://via.placeholder.com/300x600/1e1e1e/ffffff?text=Setup+1",
    "https://via.placeholder.com/300x600/2a2a2a/ffffff?text=Setup+2",
    "https://via.placeholder.com/300x600/333333/ffffff?text=Setup+3",
    "https://via.placeholder.com/300x600/444444/ffffff?text=Setup+4",
    "https://via.placeholder.com/300x600/555555/ffffff?text=Setup+5",
    "https://via.placeholder.com/300x600/666666/ffffff?text=Setup+6",
    "https://via.placeholder.com/300x600/777777/ffffff?text=Setup+7",
    "https://via.placeholder.com/300x600/888888/ffffff?text=Setup+8"
];

export default function ScreenshotsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[var(--bg-primary)]">
            <div className="container">
                <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">App <span className="gradient-text">Screenshots</span></h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Dive into the world of Aniset KWGT. Explore the stunning setups and widgets awaiting you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {screenshots.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group bg-[var(--card-bg)] rounded-[2rem] p-2 border border-[var(--border)] shadow-lg hover:shadow-xl transition-all"
                        >
                            <img
                                src={src}
                                alt={`Setup ${i + 1}`}
                                className="w-full rounded-[1.5rem]"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
