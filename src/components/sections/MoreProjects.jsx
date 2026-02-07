import React from 'react';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';

export default function MoreProjects() {
    const projects = [
        {
            title: "Anime Wallpapers",
            type: "App",
            icon: <Smartphone size={24} />,
            description: "High quality anime wallpapers for your device.",
            link: "https://play.google.com/store/apps/dev?id=YOUR_DEV_ID",
            color: "bg-pink-500"
        },
        {
            title: "Tech Blog",
            type: "Website",
            icon: <Globe size={24} />,
            description: "Latest tech news, tutorials and reviews.",
            link: "https://yourwebsite.com",
            color: "bg-blue-500"
        },
        {
            title: "Icon Pack",
            type: "App",
            icon: <Smartphone size={24} />,
            description: "Minimalist icon pack for Android customization.",
            link: "https://play.google.com/store/apps/dev?id=YOUR_DEV_ID",
            color: "bg-purple-500"
        }
    ];

    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">More from <span className="gradient-text">Developer</span></h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Check out my other applications and websites.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-[var(--card-bg)] rounded-[2rem] p-8 border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${project.color} opacity-5 rounded-bl-[100px] transition-transform group-hover:scale-150`}></div>

                            <div className={`w-14 h-14 ${project.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${project.color.split('-')[1]}-500/30`}>
                                {project.icon}
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold tracking-wider uppercase text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full border border-[var(--border)]">
                                    {project.type}
                                </span>
                                <ExternalLink size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                            <p className="text-[var(--text-secondary)]">
                                {project.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
