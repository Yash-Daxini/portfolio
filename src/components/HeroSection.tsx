import { ABOUT, EMAIL, GITHUB, LINKEDIN, PROJECTS } from '@/shared/config'
import { Cpu, Download, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import React, { useRef } from 'react'

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

    return (
        <section ref={heroRef} id="about" className="mb-20 pt-10">
            <div className={`${cardBg} border ${borderColor} rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                                Hello, I'm Yash Daxini
                            </h1>
                            <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
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
                                    className={`${accentBg} text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer`}
                                >
                                    <Download size={20} />
                                    Download Resume
                                </button>

                                {showResumeMenu && (
                                    <div className={`absolute top-full mt-2 ${cardBg} border ${borderColor} rounded-lg shadow-2xl p-2 min-w-[200px] z-10 animate-fade-in`}>
                                        <button
                                            onClick={() => downloadResume('dark')}
                                            className={`w-full text-left px-4 py-3 rounded-lg hover:${isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-colors flex items-center gap-3 cursor-pointer`}
                                        >
                                            <Moon size={18} className="text-purple-400" />
                                            <div>
                                                <div className="font-medium">Dark Theme</div>
                                                <div className="text-xs opacity-60">Perfect for dark mode</div>
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => downloadResume('light')}
                                            className={`w-full text-left px-4 py-3 rounded-lg hover:${isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-colors flex items-center gap-3 cursor-pointer`}
                                        >
                                            <Sun size={18} className="text-yellow-400" />
                                            <div>
                                                <div className="font-medium">Light Theme</div>
                                                <div className="text-xs opacity-60">Print-friendly version</div>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <a
                                href="#contact"
                                className={`border-2 ${borderColor} hover:border-cyan-400 px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 font-medium hover:scale-105`}
                            >
                                <Mail size={20} />
                                Get in Touch
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-8">
                            <a href={GITHUB} target="_blank" className={`p-3 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 hover:scale-110`}>
                                <Github size={22} />
                            </a>
                            <a href={LINKEDIN} target="_blank" className={`p-3 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 hover:scale-110`}>
                                <Linkedin size={22} />
                            </a>
                            <a href={`mailto:${EMAIL}`} className={`p-3 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 hover:scale-110`}>
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Status Card */}
                    <div className={`${isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'} rounded-xl p-6 border ${borderColor} h-fit`}>
                        <h3 className="font-mono font-bold mb-4 flex items-center gap-2">
                            <Cpu className={accentColor} size={20} />
                            Current Status
                        </h3>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex justify-between items-center">
                                <span className="opacity-70">Location:</span>
                                <span className={accentColor}>Remote</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="opacity-70">Projects:</span>
                                <span className={accentColor}>{PROJECTS.length} Active</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="opacity-70">Availability:</span>
                                <span className="text-green-400 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    Open
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="opacity-70">Response:</span>
                                <span>24-48 hours</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-600">
                            <div className="text-xs opacity-60 mb-2 font-mono">SKILLS PROFICIENCY</div>
                            <div className="space-y-2">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>DevOps</span>
                                        <span className={accentColor}>95%</span>
                                    </div>
                                    <div className={`${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-2`}>
                                        <div className={`${accentBg} h-2 rounded-full transition-all duration-1000`} style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>Cloud</span>
                                        <span className={accentColor}>90%</span>
                                    </div>
                                    <div className={`${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-2`}>
                                        <div className={`${accentBg} h-2 rounded-full transition-all duration-1000`} style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>Linux</span>
                                        <span className={accentColor}>92%</span>
                                    </div>
                                    <div className={`${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-2`}>
                                        <div className={`${accentBg} h-2 rounded-full transition-all duration-1000`} style={{ width: '92%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection