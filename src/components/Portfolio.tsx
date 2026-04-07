"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import BootSequence from "./BootSequence";
import DotGrid from "./DotGrid";
import ScrollProgress from "./ScrollProgress";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [, setShowScrollTop] = useState(false);
  const [showBootSequence, setShowBootSequence] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const bgColor = isDark ? "bg-slate-950" : "bg-gray-50";
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  const accentColor = isDark ? "text-cyan-400" : "text-blue-600";
  const accentBg = isDark ? "bg-cyan-500 text-slate-950" : "bg-blue-600 text-white";
  const cardBg = isDark ? "bg-slate-900/80 backdrop-blur-md" : "bg-white/90 backdrop-blur-md";
  const borderColor = isDark ? "border-cyan-500/30" : "border-gray-200";

  return (
    <>
      {showBootSequence && (
        <BootSequence onComplete={() => setShowBootSequence(false)} />
      )}
      <div
        className={`relative min-h-screen ${bgColor} ${textColor} transition-all duration-500 overflow-hidden ${showBootSequence ? "hidden" : ""}`}
      >
        <ScrollProgress />

        {isDark && <DotGrid />}

        <Header
          cardBg={cardBg}
          borderColor={borderColor}
          accentBg={accentBg}
          accentColor={accentColor}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <MainContent
          cardBg={cardBg}
          borderColor={bgColor}
          accentBg={accentBg}
          accentColor={accentColor}
          textColor={textColor}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <Footer borderColor={borderColor} />
      </div>
    </>
  );
};

export default Portfolio;
