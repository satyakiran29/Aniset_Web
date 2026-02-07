import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[var(--bg-primary)]">
            <div className="container max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className="bg-[var(--card-bg)] rounded-[2rem] border border-[var(--border)] p-8 md:p-12 shadow-sm">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
                    <p className="text-[var(--text-secondary)] mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-secondary)]">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">1. Acceptance of Terms</h3>
                        <p>By downloading, installing, or using Aniset KWGT ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">2. License to Use</h3>
                        <p>Aniset KWGT grants you a personal, non-exclusive, non-transferable, limited license to use the App for your personal, non-commercial use on devices owned or controlled by you, subject to these Terms.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">3. Intellectual Property</h3>
                        <p>All intellectual property rights in the App, including but not limited to designs, widgets, code, and graphics, are owned by the developer (Satya Kiran) and are protected by applicable copyright and intellectual property laws.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">4. Refund Policy</h3>
                        <p>Refunds for Aniset KWGT (Pro version) are handled through the Google Play Store's standard refund policies. Please refer to Google Play's support for refund requests.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">5. Disclaimer of Warranties</h3>
                        <p>The App is provided "as is" and "as available" without any warranties of any kind, express or implied. We do not warrant that the App will be error-free or uninterrupted.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">6. Limitation of Liability</h3>
                        <p>To the maximum extent permitted by law, the developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the App.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">7. Changes to Terms</h3>
                        <p>We reserve the right to modify these Terms at any time. We will notify users of any significant changes by updating the "Last Updated" date at the top of this policy.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">8. Contact Us</h3>
                        <p>If you have any questions about these Terms, please contact us at support@aniset.com.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
