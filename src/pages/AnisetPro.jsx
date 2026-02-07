import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnisetPro() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2026-03-19") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="pt-32 pb-20 min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] -z-10"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--accent)] opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-12">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-bold text-sm mb-6 border border-[var(--accent)]/20">
                        COMING SOON
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Aniset <span className="gradient-text">Pro</span>
                    </h1>

                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
                        A standalone application. No KWGT required. <br />
                        <span className="text-[var(--text-primary)] font-semibold">Free for all existing Aniset KWGT users.</span>
                    </p>

                    {/* Countdown Timer */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                        {Object.keys(timeLeft).map((interval) => (
                            <div key={interval} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 shadow-lg">
                                <div className="text-4xl md:text-6xl font-bold gradient-text mb-2">
                                    {timeLeft[interval] || '0'}
                                </div>
                                <div className="text-[var(--text-secondary)] uppercase tracking-widest text-sm font-medium">
                                    {interval}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-indigo-500/20">
                        <Bell size={20} />
                        Notify Me at Launch
                    </button>

                    <p className="mt-8 text-sm text-[var(--text-secondary)]">
                        Release Date: March 19, 2026
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
