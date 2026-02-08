import { SKILLS } from '@/shared/config'
import { Box } from 'lucide-react'
import React, { useState } from 'react'

interface SkillsSectionProps {
    cardBg: string
    accentColor: string
    borderColor: string
    isDark: boolean
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ cardBg, accentColor, borderColor, isDark }: SkillsSectionProps) => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <>
            <style>{`
                @keyframes skill-glow {
                    0%, 100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.3); }
                    50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.6); }
                }

                @keyframes float-skill {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }

                @keyframes skill-shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                .skill-card-glow {
                    position: relative;
                    overflow: hidden;
                }

                .skill-card-glow::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(34, 211, 238, 0.1),
                        transparent
                    );
                    transition: left 0.5s;
                }

                .skill-card-glow:hover::before {
                    left: 100%;
                }

                .skill-tag {
                    position: relative;
                    overflow: hidden;
                }

                .skill-tag::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(34, 211, 238, 0.3);
                    transform: translate(-50%, -50%);
                    transition: width 0.4s, height 0.4s;
                }

                .skill-tag:hover::after {
                    width: 200%;
                    height: 200%;
                }

                .skill-icon-rotate {
                    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                .skill-card-glow:hover .skill-icon-rotate {
                    transform: rotate(360deg) scale(1.2);
                }

                .gradient-border-skill {
                    position: relative;
                }

                .gradient-border-skill::before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: 0.75rem;
                    padding: 2px;
                    background: linear-gradient(45deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee);
                    background-size: 300% 300%;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s;
                    animation: gradient-rotate 3s linear infinite;
                }

                .gradient-border-skill:hover::before {
                    opacity: 1;
                }

                @keyframes gradient-rotate {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .skill-grid-3d {
                    perspective: 1000px;
                }

                .skill-card-3d {
                    transform-style: preserve-3d;
                    transition: transform 0.6s;
                }

                .skill-card-3d:hover {
                    transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
                }
            `}</style>
            <section id="skills" className="mb-20 animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                    <div className="animate-float">
                        <Box className={`${accentColor} animate-glow`} size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-gradient">Technical Skills</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 skill-grid-3d">
                    {Object.entries(SKILLS).map(([category, data], index) => (
                        <div
                            key={category}
                            className={`${cardBg} border ${borderColor} rounded-xl p-6 hover:shadow-2xl transition-all duration-500 animate-fade-in skill-card-glow skill-card-3d gradient-border-skill`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredCard(category)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <h3 className={`font-mono font-bold mb-4 ${accentColor} uppercase flex items-center gap-2`}>
                                <span className="skill-icon-rotate">
                                    {data.icon}
                                </span>
                                <span className="relative">
                                    {category}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-500 ${hoveredCard === category ? 'w-full' : 'w-0'}`}
                                    ></span>
                                </span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {data.items.map((skill, i) => (
                                    <span
                                        key={skill}
                                        className={`${isDark ? 'bg-gray-700 hover:bg-cyan-400/20' : 'bg-gray-100 hover:bg-cyan-400/20'} px-3 py-1.5 rounded-lg text-sm transition-all duration-300 cursor-default skill-tag border border-transparent hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20`}
                                        style={{
                                            animationDelay: `${(index * 100) + (i * 50)}ms`,
                                            animation: hoveredSkill === skill ? 'float-skill 1s ease-in-out infinite' : 'none'
                                        }}
                                        onMouseEnter={() => setHoveredSkill(skill)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default SkillsSection