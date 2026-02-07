import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "선배야쿠자",
        rating: 5,
        text: "This widget is best in Play Store and it's a game-changer! It's sleek, customizable, and makes app discovery and management a breeze. The developer support for this widget is top-notch."
    },
    {
        name: "Ahmed Alkhatib",
        rating: 5,
        text: "Recommend to anyone. Great set of widgets with totally original style and design. Just top notch developer. I hope this pack keeps on growing."
    },
    {
        name: "Gaurav Kumar",
        rating: 5,
        text: "Using it since one year and really like it's widgets. And developer thank you for your efforts."
    },
    {
        name: "Fatema",
        rating: 5,
        text: "I'm in Love with this Kwgt & Klwp 🥹🩷 thank you so much"
    },
    {
        name: "Amartya Anand",
        rating: 5,
        text: "Awesome widgets especially the anya one looks cool"
    },
    {
        name: "Nate Westby",
        rating: 5,
        text: "Great widget and wall set. Only found 1 locked widget (I hate those). Gonna keep."
    },
    {
        name: "A Koushik",
        rating: 5,
        text: "Thanks You for making anime kwgt ❤️❤️❤️"
    },
    {
        name: "Abul Haritz",
        rating: 5,
        text: "Good app. Nice dev."
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-20 bg-[var(--bg-secondary)] overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by the <span className="gradient-text">Community</span></h2>
                    <div className="flex items-center justify-center gap-2 text-[var(--text-secondary)]">
                        <Star className="fill-yellow-400 text-yellow-400" size={20} />
                        <span className="font-bold text-[var(--text-primary)]">4.8/5.0</span>
                        <span>average rating</span>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="break-inside-avoid mb-6 card p-6 bg-[var(--card-bg)] shadow-sm hover:shadow-xl transition-all border border-[var(--border)] hover:border-[var(--accent)] flex flex-col"
                        >
                            <Quote size={24} className="text-[var(--accent)] opacity-20 mb-4" />

                            <div className="flex gap-1 mb-3 text-yellow-400">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        size={14}
                                        fill={starIndex < review.rating ? "currentColor" : "none"}
                                        className={starIndex < review.rating ? "text-yellow-400" : "text-gray-300"}
                                    />
                                ))}
                            </div>

                            <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="font-bold text-sm text-[var(--text-primary)] truncate">
                                    {review.name}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
