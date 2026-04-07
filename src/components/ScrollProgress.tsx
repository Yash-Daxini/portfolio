"use client";

import React, { useEffect, useState } from "react";

const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[100]">
            <div
                className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-green-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
            />
        </div>
    );
};

export default ScrollProgress;
