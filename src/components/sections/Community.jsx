import React from 'react';
import { MessageCircle, Gamepad2, ArrowRight } from 'lucide-react';

export default function Community() {
    return (
        <section id="community" className="py-20 bg-[var(--bg-secondary)]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the <span className="gradient-text">Community</span></h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Connect with other users, share your setups, get support, and stay updated with the latest news.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Telegram Card */}
                    <a
                        href="https://t.me/Anisetkwgt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center bg-[var(--card-bg)] p-8 rounded-[2rem] border border-[var(--border)] hover:border-[#0088cc] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                        <div className="w-20 h-20 bg-[#0088cc]/10 text-[#0088cc] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MessageCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Telegram Channel</h3>
                        <p className="text-[var(--text-secondary)] text-center mb-6">
                            Join our channel for updates, sneak peeks, and direct support.
                        </p>
                        <div className="flex items-center gap-2 text-[#0088cc] font-medium group-hover:gap-3 transition-all">
                            Join Channel <ArrowRight size={18} />
                        </div>
                    </a>

                    {/* Discord Card */}
                    <a
                        href="https://discord.gg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center bg-[var(--card-bg)] p-8 rounded-[2rem] border border-[var(--border)] hover:border-[#5865F2] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                        <div className="w-20 h-20 bg-[#5865F2]/10 text-[#5865F2] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Gamepad2 size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Discord Server</h3>
                        <p className="text-[var(--text-secondary)] text-center mb-6">
                            Hang out with the community, share setups, and get help.
                        </p>
                        <div className="flex items-center gap-2 text-[#5865F2] font-medium group-hover:gap-3 transition-all">
                            Join Server <ArrowRight size={18} />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
