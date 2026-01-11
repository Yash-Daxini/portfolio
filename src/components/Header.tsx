import { Moon, Sun, Terminal } from 'lucide-react';
import React from 'react';

interface HeaderProps {
    cardBg: string
    borderColor: string
    accentBg: string
    accentColor: string
    isDark: boolean
    setIsDark: (isDark: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ cardBg, borderColor, accentBg, accentColor, isDark, setIsDark }: HeaderProps) => {
    return (
        <div>{/* Header with gradient */}
            <header className={`border-b ${borderColor} sticky top-0 ${cardBg} z-50 shadow-lg`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className={`${accentBg} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                                <Terminal className="text-white" size={22} />
                            </div>
                            <div>
                                <div className="font-mono font-bold text-lg">Yash Daxini</div>
                                <div className={`text-xs ${accentColor} font-mono`}>DevOps Engineer</div>
                            </div>
                        </div>

                        <nav className="flex gap-6 items-center">
                            <a href="#about" className={`font-medium hover:${accentColor} transition-colors duration-300`}>About</a>
                            <a href="#skills" className={`font-medium hover:${accentColor} transition-colors duration-300`}>Skills</a>
                            <a href="#projects" className={`font-medium hover:${accentColor} transition-colors duration-300`}>Projects</a>
                            <a href="#contact" className={`font-medium hover:${accentColor} transition-colors duration-300`}>Contact</a>
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className={`p-2.5 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 hover:scale-110`}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header