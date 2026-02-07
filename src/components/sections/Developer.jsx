import React from 'react';
import { Twitter, Instagram, Mail, Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Developer() {
    return (
        <section id="developer" className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the <span className="gradient-text">Creator</span></h2>
                </div>

                <div className="max-w-4xl mx-auto bg-[var(--card-bg)] rounded-[2rem] border border-[var(--border)] p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-10">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="shrink-0 relative"
                    >
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[var(--accent)] p-1">
                            <img
                                src="https://raw.githubusercontent.com/satyakiran29/satyakiran29/refs/heads/main/Images/satoru_gojo.png"
                                alt="Satya Kiran"
                                className="w-full h-full rounded-full object-cover bg-[var(--bg-secondary)]"
                            />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-[var(--card-bg)]" title="Available for work"></div>
                    </motion.div>

                    {/* Bio Content */}
                    <div className="text-center md:text-left flex-1">
                        <div className="mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">Satya Kiran</h3>
                            <p className="text-[var(--accent)] font-medium">UI/UX Designer & Developer</p>
                        </div>

                        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                            Passionate about crafting stunning Android customization experiences.
                            I build interfaces that blend aesthetics with functionality, helping you make your device truly yours.
                            Creator of Aniset KWGT and other premium personalization tools.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="#" className="p-3 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm hover:shadow-md group">
                                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm hover:shadow-md group">
                                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm hover:shadow-md group">
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm hover:shadow-md group">
                                <Globe size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="mailto:contact@example.com" className="btn btn-primary px-6 py-2 text-sm ml-2">
                                <Mail size={16} />
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
