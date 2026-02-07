import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
                    <p className="text-[var(--text-secondary)] mb-8">Last Updated: 30/03/2025</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-secondary)]">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">1. Introduction</h3>
                        <p>This Privacy Policy is provided by Aniset, the entity responsible for Aniset, and is accessible both on our app's store listing page and within the app itself. Your privacy is important to us, and we are committed to protecting your personal and sensitive data. Please read this Policy to understand how we collect, use, and secure your data.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">2. Personal Information</h3>
                        <p>Aniset may collect personal information such as your name, email address, and device ID for account creation and customization purposes.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">3. Usage Data</h3>
                        <p>We may collect information on how you use the app, including your interactions with wallpapers and features.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">4. Log Data</h3>
                        <p>We automatically collect log data, which may include information such as your device's Internet Protocol ("IP") address, device name, operating system version, and other statistics.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">5. Cookies</h3>
                        <p>Aniset does not use cookies or similar tracking technologies.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">6. Security</h3>
                        <p>We prioritize the security of your personal information and implement appropriate measures to protect it from unauthorized access or disclosures.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">7. Children’s Privacy</h3>
                        <p>Aniset does not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and discover that your child has provided us with personal information, please contact us, and we will promptly delete such information.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">8. Contact Information</h3>
                        <p>If you have any questions or concerns about your privacy or this Policy, you can contact Skdev.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">9. Changes to this Privacy Policy</h3>
                        <p>We may update this Policy to reflect changes in our data practices. You will be notified of any significant changes, and the updated Policy will be made accessible on the same URL.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4">10. Closing Remarks</h3>
                        <p>This policy may be updated to reflect changes in our data practices, and we will notify you of any significant changes. Any updates will be made accessible on the same URL, so we encourage you to periodically review this policy.</p>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-4"></h3>
                        <p>Again, thank you for using Aniset, and for entrusting us with your data. We appreciate your support and hope you enjoy using our app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
