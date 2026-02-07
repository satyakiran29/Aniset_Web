import React from 'react';
import { Download, Plus, Search, Save } from 'lucide-react';

export default function HowToApply() {
    const steps = [
        {
            icon: <Download size={24} />,
            title: "Install Apps",
            description: "Download KWGT Kustom Widget Maker and KWGT Pro Key from the Play Store."
        },
        {
            icon: <Download size={24} />,
            title: "Install Aniset",
            description: "Install Aniset KWGT from the Play Store or using the redeem code provided."
        },
        {
            icon: <Plus size={24} />,
            title: "Add Widget",
            description: "Long press your home screen, select 'Widgets', and add a KWGT widget."
        },
        {
            icon: <Search size={24} />,
            title: "Select Widget",
            description: "Tap the widget to open KWGT editor. Go to 'Explore' tab and find 'Aniset'."
        },
        {
            icon: <Save size={24} />,
            title: "Save & Enjoy",
            description: "Pick your favorite widget, adjust scale if needed, and hit the save button."
        }
    ];

    return (
        <section id="howto" className="py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How to <span className="gradient-text">Apply</span></h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Setting up your new widgets is easy. Just follow these simple steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform shadow-lg relative z-10">
                                {step.icon}
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[var(--border)] -z-0"></div>
                            )}

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
