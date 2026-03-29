import { Moon, Sun, TerminalSquare, Menu, X } from "lucide-react";
import React, { useState } from "react";

interface HeaderProps {
  cardBg: string;
  borderColor: string;
  accentBg: string;
  accentColor: string;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  cardBg,
  borderColor,
  isDark,
  setIsDark,
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`border-b ${borderColor} sticky top-0 ${cardBg} z-50 backdrop-blur-xl shadow-lg`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div
              className={`bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors duration-300 shadow-inner`}
            >
              <TerminalSquare className={`group-hover:text-gray-900 text-cyan-400`} size={20} />
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight">
                Yash Daxini
              </div>
              <div className="text-xs text-cyan-400 font-mono font-medium hidden sm:block">
                Software Engineer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
            <a
              href="#about"
              className={`hover:text-cyan-400 transition-colors px-2 py-1`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`hover:text-cyan-400 transition-colors px-2 py-1 font-mono text-xs`}
            >
              {"<Skills />"}
            </a>
            <a
              href="#projects"
              className={`hover:text-cyan-400 transition-colors px-2 py-1`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`hover:text-cyan-400 transition-colors px-2 py-1`}
            >
              Contact
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full border border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow-inner ml-2`}
              title="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full border ${borderColor} hover:bg-gray-800 transition-colors`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg border ${borderColor} hover:bg-gray-800 transition-colors`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden mt-4 pb-4 border-t ${borderColor} pt-4 animate-fade-in`}>
            <div className="flex flex-col gap-2 font-medium">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className={`hover:text-cyan-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors`}
              >
                About
              </a>
              <a
                href="#skills"
                onClick={closeMobileMenu}
                className={`hover:text-cyan-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors font-mono text-sm`}
              >
                {"<Skills />"}
              </a>
              <a
                href="#projects"
                onClick={closeMobileMenu}
                className={`hover:text-cyan-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors`}
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className={`hover:text-cyan-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors`}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
