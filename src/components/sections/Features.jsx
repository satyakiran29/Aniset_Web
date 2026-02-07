import React from 'react';
import { Palette, Layers, RefreshCw, Smartphone, Zap, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Palette className="w-8 h-8 text-[var(--accent)]" />,
        title: "100+ Anime Widgets",
        desc: "A vast collection of high-quality widgets inspired by top anime series."
    },
    {
        icon: <Layers className="w-8 h-8 text-[var(--accent)]" />,
        title: "fully Customizable",
        desc: "Adjust colors, sizes, and elements to match your wallpaper perfectly."
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-[var(--accent)]" />,
        title: "Regular Updates",
        desc: "Fresh widgets added weekly to keep your home screen looking new."
    },
    {
        icon: <Gift className="w-8 h-8 text-[var(--accent)]" />,
        title: "Free Pro Upgrade",
        desc: "Get premium features without any subscription. Pay once, own forever."
    },
    {
        icon: <Zap className="w-8 h-8 text-[var(--accent)]" />,
        title: "Lightweight",
        desc: "Optimized for performance. minimal battery usage guaranteed."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-[var(--accent)]" />,
        title: "Responsive",
        desc: "Looks great on any screen size or aspect ratio."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-[var(--bg-secondary)]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Aniset?</span></h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Packed with features designed to take your Android customization to the next level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card p-8 hover:border-[var(--accent)] transition-all"
                        >
                            <div className="bg-[var(--bg-primary)] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
