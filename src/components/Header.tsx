import { Moon, Sun, Terminal, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

interface HeaderProps {
    cardBg: string
    borderColor: string
    accentBg: string
    accentColor: string
    isDark: boolean
    setIsDark: (isDark: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ cardBg, borderColor, accentBg, accentColor, isDark, setIsDark }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`border-b ${borderColor} sticky top-0 ${cardBg} z-50 shadow-lg`}>
            <div className="container mx-auto px-4 sm:px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo/Brand */}
                    <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                        <div className={`${accentBg} p-1.5 sm:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Terminal className="text-white" size={18} />
                        </div>
                        <div>
                            <div className="font-mono font-bold text-sm sm:text-lg">Yash Daxini</div>
                            <div className={`text-xs ${accentColor} font-mono hidden sm:block`}>Software Engineer</div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 items-center">
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

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={toggleMobileMenu}
                            className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            <a 
                                href="#about" 
                                onClick={closeMobileMenu}
                                className={`font-medium hover:${accentColor} transition-colors duration-300 py-2`}
                            >
                                About
                            </a>
                            <a 
                                href="#skills" 
                                onClick={closeMobileMenu}
                                className={`font-medium hover:${accentColor} transition-colors duration-300 py-2`}
                            >
                                Skills
                            </a>
                            <a 
                                href="#projects" 
                                onClick={closeMobileMenu}
                                className={`font-medium hover:${accentColor} transition-colors duration-300 py-2`}
                            >
                                Projects
                            </a>
                            <a 
                                href="#contact" 
                                onClick={closeMobileMenu}
                                className={`font-medium hover:${accentColor} transition-colors duration-300 py-2`}
                            >
                                Contact
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;