"use client";

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  const bgColor = isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const accentColor = isDark ? 'text-cyan-400' : 'text-blue-600';
  const accentBg = isDark ? 'bg-cyan-400' : 'bg-blue-600';
  const cardBg = isDark ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm';
  const borderColor = isDark ? 'border-gray-700/50' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-all duration-500`}>

      <Header
        cardBg={cardBg}
        borderColor={borderColor}
        accentBg={accentBg}
        accentColor={accentColor}
        isDark={isDark}
        setIsDark={setIsDark} />

      <MainContent
        cardBg={cardBg}
        borderColor={bgColor}
        accentBg={accentBg}
        accentColor={accentColor}
        textColor={textColor}
        isDark={isDark}
        setIsDark={setIsDark} />

      <Footer borderColor={borderColor} />
    </div>
  );
};

export default Portfolio;