import { PROJECTS } from '@/shared/config'
import { GitBranch, Github, ExternalLink } from 'lucide-react'
import React from 'react'

interface ProjectsProps {
    cardBg: string
    accentColor: string
    borderColor: string
}

const Projects: React.FC<ProjectsProps> = ({ cardBg, accentColor, borderColor }: ProjectsProps) => {
    return (
        <section id="projects" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
                <GitBranch className={accentColor} size={28} />
                <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className={`${cardBg} border ${borderColor} rounded-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-cyan-400 group animate-fade-in`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="mb-4">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <p className="opacity-80 text-sm leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                                <span key={tech} className={`${accentColor} text-xs font-mono border ${borderColor} px-2 py-1 rounded hover:bg-cyan-400 hover:text-white transition-all`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {(project.githubLink || project.liveLink) &&
                            <div className="flex gap-3 pt-4 border-t border-gray-700">
                                {project.githubLink &&
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        className={`flex items-center gap-2 ${accentColor} hover:underline text-sm font-mono hover:scale-110 transition-transform`}
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                }
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        className={`flex items-center gap-2 ${accentColor} hover:underline text-sm font-mono hover:scale-110 transition-transform`}
                                    >
                                        <ExternalLink size={16} />
                                        Live
                                    </a>
                                )}
                            </div>
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects