import React, { useEffect, useRef, useState } from 'react'
import TerminalSection from './TerminalSection'
import HeroSection from './HeroSection'
import SkillsSection from './SkillsSection'
import Porjects from './Porjects'
import ContactSection from './ContactSection'

interface MainContentProps {
    cardBg: string
    borderColor: string
    accentBg: string
    accentColor: string
    textColor: string
    isDark: boolean
    setIsDark: (isDark: boolean) => void
}

const MainContent: React.FC<MainContentProps> = ({ cardBg, borderColor, accentBg, accentColor, textColor, isDark, setIsDark }: MainContentProps) => {

    const [showResumeMenu, setShowResumeMenu] = useState(false);
    const resumeMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resumeMenuRef.current && !resumeMenuRef.current.contains(event.target as Node)) {
                setShowResumeMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resumeMenuRef.current && !resumeMenuRef.current.contains(event.target as Node)) {
                setShowResumeMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Replace the downloadResume function
    const downloadResume = (theme?: 'dark' | 'light') => {
        const resumeTheme = theme || (isDark ? 'dark' : 'light');
        const link = document.createElement('a');
        link.href = `/resume-${resumeTheme}.pdf`;
        link.download = `resume-${resumeTheme}.pdf`;
        link.click();
        setShowResumeMenu(false);
    };


    // const downloadResume = () => {
    //     const link = document.createElement('a');
    //     link.href = isDark ? '/resume-dark.pdf' : '/resume-light.pdf';
    //     link.download = `resume-${isDark ? 'dark' : 'light'}.pdf`;
    //     link.click();
    // };

    return (
        <main className="container mx-auto px-6 py-12">

            <HeroSection
                cardBg={cardBg}
                accentBg={accentBg}
                accentColor={accentColor}
                borderColor={borderColor}
                isDark={isDark}
                downloadResume={downloadResume} 
                resumeMenuRef={resumeMenuRef} 
                showResumeMenu={showResumeMenu} 
                setShowResumeMenu={setShowResumeMenu} />

            <TerminalSection
                cardBg={cardBg}
                accentBg={accentBg}
                accentColor={accentColor}
                borderColor={borderColor}
                textColor={textColor}
                isDark={isDark}
                setIsDark={setIsDark}
                downloadResume={downloadResume} />

            <SkillsSection
                cardBg={cardBg}
                accentColor={accentColor}
                borderColor={borderColor}
                isDark={isDark} />

            <Porjects
                cardBg={cardBg}
                accentColor={accentColor}
                borderColor={borderColor} />

            <ContactSection
                cardBg={cardBg}
                accentBg={accentBg}
                accentColor={accentColor}
                borderColor={borderColor}
                isDark={isDark} />
        </main>
    )
}

export default MainContent