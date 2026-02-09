import { ABOUT, EMAIL, GITHUB, LINKEDIN, PROJECTS } from '@/shared/config'
import { Cpu, Download, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import React, { useRef, useState, useEffect } from 'react'

interface HeroSectionProps {
    cardBg: string
    accentBg: string
    accentColor: string
    borderColor: string
    isDark: boolean
    downloadResume: (theme?: 'dark' | 'light') => void
    resumeMenuRef: any
    showResumeMenu: boolean
    setShowResumeMenu: (showResumeMenu: boolean) => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ cardBg, accentBg, accentColor, borderColor, isDark, downloadResume, resumeMenuRef, showResumeMenu, setShowResumeMenu }) => {

    const heroRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringHero, setIsHoveringHero] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = (heroRef.current as HTMLElement).getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        const heroElement = heroRef.current as HTMLElement | null;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove as any);
        }

        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove as any);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                @keyframes hero-glow {
                    0%, 100% { box-shadow: 0 20px 60px rgba(34, 211, 238, 0.2); }
                    50% { box-shadow: 0 20px 80px rgba(34, 211, 238, 0.4); }
                }

                @keyframes text-shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                @keyframes stat-count {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes progress-fill {
                    from { width: 0; }
                }

                @keyframes social-pop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2) rotate(5deg); }
                    100% { transform: scale(1); }
                }

                @keyframes resume-menu-slide {
                    from { 
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes typing-blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }

                .hero-card {
                    position: relative;
                    overflow: hidden;
                }

                .hero-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s;
                    pointer-events: none;
                }

                .hero-card:hover::before {
                    opacity: 1;
                }

                .hero-spotlight {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(34, 211, 238, 0.15), transparent 70%);
                    pointer-events: none;
                    transition: opacity 0.3s;
                }

                .text-gradient-animated {
                    background: linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee);
                    background-size: 300% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: text-shimmer 8s linear infinite;
                }

                .button-glow-hover {
                    position: relative;
                    overflow: hidden;
                }

                .button-glow-hover::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s, height 0.6s;
                }

                .button-glow-hover:hover::before {
                    width: 300px;
                    height: 300px;
                }

                .status-badge {
                    animation: stat-count 0.6s ease-out;
                }

                .progress-bar-fill {
                    animation: progress-fill 1.5s ease-out;
                }

                .social-icon {
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                .social-icon:hover {
                    animation: social-pop 0.6s ease-in-out;
                }

                .resume-dropdown {
                    animation: resume-menu-slide 0.3s ease-out;
                }

                .typing-cursor::after {
                    content: '|';
                    animation: typing-blink 1s infinite;
                }

                .stat-value {
                    transition: all 0.3s;
                }

                .stat-card:hover .stat-value {
                    transform: scale(1.1);
                    color: #22d3ee;
                }
            `}</style>

            <section ref={heroRef} id="about" className="mb-20 pt-10 relative">
                {/* Hero Spotlight Effect */}
                {isHoveringHero && (
                    <div
                        className="hero-spotlight"
                        style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                )}

                <div
                    className={`hero-card ${cardBg} border ${borderColor} rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in`}
                    onMouseEnter={() => setIsHoveringHero(true)}
                    onMouseLeave={() => setIsHoveringHero(false)}
                    style={{ animation: 'hero-glow 3s ease-in-out infinite' }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-animated">
                                    Hello, I'm Yash Daxini
                                </h1>
                                <h2 className="text-2xl md:text-3xl mb-6 opacity-90 typing-cursor">
                                    Software Engineer | Full-Stack Developer
                                </h2>
                                <p className="text-lg opacity-80 leading-relaxed mb-8">
                                    {ABOUT}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="relative" ref={resumeMenuRef}>
                                    <button
                                        onClick={() => setShowResumeMenu(!showResumeMenu)}
                                        className={`${accentBg} text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer button-glow-hover relative overflow-hidden`}
                                    >
                                        <Download size={20} className="relative z-10" />
                                        <span className="relative z-10">Download Resume</span>
                                    </button>

                                    {showResumeMenu && (
                                        <div className={`absolute top-full mt-2 ${cardBg} border ${borderColor} rounded-lg shadow-2xl p-2 min-w-[200px] z-10 resume-dropdown`}>
                                            <button
                                                onClick={() => downloadResume('dark')}
                                                className={`w-full text-left px-4 py-3 rounded-lg hover:${isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-300 flex items-center gap-3 cursor-pointer hover:scale-105`}
                                            >
                                                <Moon size={18} className="text-purple-400 animate-pulse" />
                                                <div>
                                                    <div className="font-medium">Dark Theme</div>
                                                    <div className="text-xs opacity-60">Perfect for dark mode</div>
                                                </div>
                                            </button>
                                            <button
                                                onClick={() => downloadResume('light')}
                                                className={`w-full text-left px-4 py-3 rounded-lg hover:${isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-300 flex items-center gap-3 cursor-pointer hover:scale-105`}
                                            >
                                                <Sun size={18} className="text-yellow-400 animate-pulse" />
                                                <div>
                                                    <div className="font-medium">Light Theme</div>
                                                    <div className="text-xs opacity-60">Print-friendly version</div>
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <a href="#contact"
                                    className={`border-2 ${borderColor} hover:border-cyan-400 px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 button-glow-hover relative overflow-hidden`}
                                >
                                    <Mail size={20} className="relative z-10" />
                                    <span className="relative z-10">Get in Touch</span>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mt-8">
                                <a href={GITHUB} target="_blank" className={`p-3 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-cyan-400/20' : 'bg-gray-200 hover:bg-cyan-400/20'} transition-all duration-300 social-icon border border-transparent hover:border-cyan-400`}>
                                    <Github size={22} />
                                </a>
                                <a href={LINKEDIN} target="_blank" className={`p-3 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-cyan-400/20' : 'bg-gray-200 hover:bg-cyan-400/20'} transition-all duration-300 social-icon border border-transparent hover:border-cyan-400`}>
                                    <Linkedin size={22} />
                                </a>
                                <a href={`mailto:${EMAIL}`} className={`p-3 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-cyan-400/20' : 'bg-gray-200 hover:bg-cyan-400/20'} transition-all duration-300 social-icon border border-transparent hover:border-cyan-400`}>
                                    <Mail size={22} />
                                </a>
                            </div>
                        </div>

                        {/* Status Card */}
                        <div className={`${isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'} rounded-xl p-6 border ${borderColor} h-fit hover:shadow-xl transition-all duration-500 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity"></div>

                            <h3 className="font-mono font-bold mb-4 flex items-center gap-2 relative z-10">
                                <Cpu className={`${accentColor} animate-pulse`} size={20} />
                                Current Status
                            </h3>
                            <div className="space-y-3 font-mono text-sm relative z-10">
                                <div className="flex justify-between items-center stat-card">
                                    <span className="opacity-70">Location:</span>
                                    <span className={`${accentColor} stat-value status-badge`}>Remote</span>
                                </div>
                                <div className="flex justify-between items-center stat-card">
                                    <span className="opacity-70">Projects:</span>
                                    <span className={`${accentColor} stat-value status-badge`} style={{ animationDelay: '0.1s' }}>{PROJECTS.length}</span>
                                </div>
                                <div className="flex justify-between items-center stat-card">
                                    <span className="opacity-70">Availability:</span>
                                    <span className="text-green-400 flex items-center gap-2 stat-value status-badge" style={{ animationDelay: '0.2s' }}>
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                        Open
                                    </span>
                                </div>
                                <div className="flex justify-between items-center stat-card">
                                    <span className="opacity-70">Response:</span>
                                    <span className="stat-value status-badge" style={{ animationDelay: '0.3s' }}>24-48 hours</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-600 relative z-10">
                                <div className="text-xs opacity-60 mb-2 font-mono">SKILLS PROFICIENCY</div>
                                <div className="space-y-2">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span>Full Stack Development</span>
                                            <span className={accentColor}>90%</span>
                                        </div>
                                        <div className={`${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-2 overflow-hidden`}>
                                            <div className={`${accentBg} h-2 rounded-full progress-bar-fill`} style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span>DevOps</span>
                                            <span className={accentColor}>80%</span>
                                        </div>
                                        <div className={`${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-2 overflow-hidden`}>
                                            <div className={`${accentBg} h-2 rounded-full progress-bar-fill`} style={{ width: '80%', animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span>Linux</span>
                                            <span className={accentColor}>82%</span>
                                        </div>
                                        <div className={`${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-2 overflow-hidden`}>
                                            <div className={`${accentBg} h-2 rounded-full progress-bar-fill`} style={{ width: '82%', animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection