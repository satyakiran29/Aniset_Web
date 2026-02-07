import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "Do I need KWGT Pro?",
        a: "Yes! Aniset is a widget pack for KWGT, which requires the Pro Key to import third-party presets. You can buy KWGT Pro on the Play Store."
    },
    {
        q: "How do I apply a widget?",
        a: "Add a KWGT widget to your home screen, tap it to open the editor, select 'Aniset' from the installed packs, pick a widget, and save."
    },
    {
        q: "Will this work on my device?",
        a: "Yes, as long as your device supports KWGT and has a custom launcher (Nova, Lawnchair, etc.) recommended for best results."
    },
    {
        q: "Are updates free?",
        a: "Absolutely! Once you purchase Aniset, all future updates and new widgets are included at no extra cost."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-[var(--bg-secondary)]">
            <div className="container max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked <span className="gradient-text">Questions</span></h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] overflow-hidden transition-colors hover:border-[var(--accent)]"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left font-semibold focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.q}</span>
                                {activeIndex === index ? <ChevronUp size={20} className="text-[var(--accent)]" /> : <ChevronDown size={20} />}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border)] pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
