import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const screenshots = [
    "https://via.placeholder.com/300x600/1e1e1e/ffffff?text=Setup+1",
    "https://via.placeholder.com/300x600/2a2a2a/ffffff?text=Setup+2",
    "https://via.placeholder.com/300x600/333333/ffffff?text=Setup+3",
    "https://via.placeholder.com/300x600/444444/ffffff?text=Setup+4"
];

export default function Gallery() {
    const scrollRef = useRef(null);

    return (
        <section id="gallery" className="py-20 overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stunning <span className="gradient-text">Setups</span></h2>
                    <p className="text-[var(--text-secondary)]">
                        Explore what's possible with Aniset KWGT.
                    </p>
                </div>

                {/* Mobile: Horizontal Scroll */}
                <div className="flex md:hidden overflow-x-auto gap-4 pb-8 snap-x snap-mandatory px-4 -mx-4">
                    {screenshots.map((src, i) => (
                        <div key={i} className="snap-center shrink-0 w-[280px]">
                            <img
                                src={src}
                                alt={`Setup ${i + 1}`}
                                className="w-full rounded-[2rem] shadow-xl border-4 border-[var(--border)]"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop: Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {screenshots.map((src, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <img
                                src={src}
                                alt={`Setup ${i + 1}`}
                                className="w-full rounded-[2rem] shadow-xl border-4 border-[var(--border)] transition-all group-hover:shadow-2xl group-hover:border-[var(--accent)]"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] flex items-center justify-center">
                                <span className="text-white font-medium px-4 py-2 bg-[var(--accent)] rounded-full">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
