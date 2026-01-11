import React from 'react'
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

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = isDark ? '/resume-dark.pdf' : '/resume-light.pdf';
        link.download = `resume-${isDark ? 'dark' : 'light'}.pdf`;
        link.click();
    };

    return (
        <main className="container mx-auto px-6 py-12">

            <HeroSection
                cardBg={cardBg}
                accentBg={accentBg}
                accentColor={accentColor}
                borderColor={borderColor}
                isDark={isDark}
                downloadResume={downloadResume} />

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