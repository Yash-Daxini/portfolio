import { PROJECTS } from '@/shared/config'
import { GitBranch, Github, ExternalLink } from 'lucide-react'
import React, { useState } from 'react'

interface ProjectsProps {
    cardBg: string
    accentColor: string
    borderColor: string
}

const Projects: React.FC<ProjectsProps> = ({ cardBg, accentColor, borderColor }: ProjectsProps) => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <>
            <style>{`
                @keyframes project-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes tech-tag-bounce {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                @keyframes link-pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.6; }
                }

                .project-card {
                    position: relative;
                    overflow: hidden;
                    transform-style: preserve-3d;
                }

                .project-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s, transform 0.5s;
                    pointer-events: none;
                }

                .project-card:hover::before {
                    opacity: 1;
                    transform: scale(1.5);
                }

                .project-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 0.75rem;
                    padding: 2px;
                    background: linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s;
                }

                .project-card:hover::after {
                    opacity: 1;
                    animation: gradient-shift 2s linear infinite;
                }

                .project-image-placeholder {
                    background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1));
                    position: relative;
                    overflow: hidden;
                }

                .project-image-placeholder::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: conic-gradient(from 0deg, transparent, rgba(34, 211, 238, 0.3), transparent);
                    animation: spin 3s linear infinite;
                }

                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }

                .tech-tag-animated {
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                .tech-tag-animated:hover {
                    animation: tech-tag-bounce 0.6s ease-in-out;
                }

                .project-title-animated {
                    background: linear-gradient(90deg, currentColor 0%, #22d3ee 50%, currentColor 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    transition: background-position 0.5s;
                }

                .project-card:hover .project-title-animated {
                    background-position: -100% 0;
                }

                .link-glow:hover {
                    animation: link-pulse 1s ease-in-out infinite;
                    text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
                }
            `}</style>
            <section id="projects" className="mb-20 animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                    <div className="animate-float">
                        <GitBranch className={`${accentColor} animate-glow`} size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-gradient">Featured Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className={`${cardBg} border ${borderColor} rounded-xl p-6 hover:shadow-2xl transition-all duration-500 group animate-fade-in project-card`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: hoveredProject === index ? 'project-float 2s ease-in-out infinite' : ''
                            }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >

                            <div className="mb-4">
                                <h3 className="font-bold text-xl mb-2 transition-colors project-title-animated">
                                    {project.title}
                                </h3>
                                <p className="opacity-80 text-sm leading-relaxed">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={tech}
                                        className={`${accentColor} text-xs font-mono border ${borderColor} px-2 py-1 rounded hover:bg-cyan-400 hover:text-white transition-all tech-tag-animated`}
                                        style={{ animationDelay: `${i * 50}ms` }}
                                    >
                                        #{tech}
                                    </span>
                                ))}
                            </div>
                            {(project.githubLink || project.liveLink) &&
                                <div className="flex gap-3 pt-4 border-t border-gray-700">
                                    {project.githubLink &&

                                        <a href={project.githubLink}
                                            target="_blank"
                                            className={`flex items-center gap-2 ${accentColor} hover:underline text-sm font-mono transition-all link-glow`}
                                        >
                                            <Github size={16} className="group-hover:rotate-12 transition-transform" />
                                            <span className="relative">
                                                Code
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                                            </span>
                                        </a>
                                    }
                                    {project.liveLink && (

                                        <a href={project.liveLink}
                                            target="_blank"
                                            className={`flex items-center gap-2 ${accentColor} hover:underline text-sm font-mono transition-all link-glow`}
                                        >
                                            <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                                            <span className="relative">
                                                Live
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                                            </span>
                                        </a>
                                    )}
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects