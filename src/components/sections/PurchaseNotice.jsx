import React from 'react';
import { AlertCircle, Send } from 'lucide-react';

export default function PurchaseNotice() {
    return (
        <section id="purchase" className="py-20">
            <div className="container">
                <div className="max-w-3xl mx-auto bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-[2rem] border border-red-500/20 p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 text-red-500">
                            <AlertCircle size={32} />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Important Notice</h2>

                        <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                            Due to refund abuse and Play Store taxes, I’ve increased the price on the Play Store.
                            To cut out Play Store tax, I’m offering a discounted price for <span className="font-bold text-[var(--text-primary)]">direct purchases</span>.
                        </p>

                        <div className="bg-[var(--card-bg)] rounded-xl p-6 border border-[var(--border)] w-full max-w-lg mb-8 shadow-sm">
                            <h3 className="font-bold text-[var(--text-primary)] mb-4">Discounted Price (Tax Removed)</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 text-xl">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-2xl">🇮🇳</span>
                                    <span className="font-bold gradient-text">₹200</span>
                                    <span className="text-sm text-[var(--text-secondary)]">for India (UPI)</span>
                                </div>
                                <div className="hidden sm:block w-px bg-[var(--border)]"></div>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-2xl">💵</span>
                                    <span className="font-bold gradient-text">$2.5</span>
                                    <span className="text-sm text-[var(--text-secondary)]">for Global (PayPal)</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-left w-full max-w-lg mb-8 space-y-3 bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border)]">
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✅</span>
                                <p className="text-[var(--text-secondary)]">After payment verification, you will receive a <strong>redeem code</strong>.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">🎟️</span>
                                <p className="text-[var(--text-secondary)]">You can redeem the app on the Play Store using this redeem code.</p>
                            </div>
                        </div>

                        <p className="text-[var(--text-secondary)] mb-8">
                            If you’re interested in buying, contact me directly on Telegram.
                        </p>

                        <a
                            href="https://t.me/skdev1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-[#0088cc] hover:bg-[#0077b5] text-white border-none px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-400/20 hover:-translate-y-1 transition-all"
                        >
                            <Send size={20} />
                            Contact @skdev1 on Telegram
                        </a>

                        <p className="mt-8 text-sm text-[var(--text-secondary)] opacity-80">
                            Thanks for understanding and for supporting genuine development. 🙏
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
