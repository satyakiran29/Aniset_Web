import React from 'react';
import { Mail, MessageCircle, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-primary)] pt-16 pb-8 border-t border-[var(--border)]">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold gradient-text mb-2">Aniset KWGT</h3>
                        <p className="text-[var(--text-secondary)]">Premium Anime Widgets for Android</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="p-3 rounded-full bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors">
                            <MessageCircle size={20} />
                        </a>
                        <a href="mailto:support@aniset.com" className="p-3 rounded-full bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-center text-sm text-[var(--text-secondary)] border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Satya Kiran. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-[var(--text-primary)]">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-[var(--text-primary)]">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
