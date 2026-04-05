"use client";

import React, { useEffect, useRef, useCallback } from "react";

const DotGrid: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationRef = useRef<number>(0);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const spacing = 40;
        const baseRadius = 1.2;
        const hoverRadius = 120;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        for (let x = spacing / 2; x < w; x += spacing) {
            for (let y = spacing / 2; y < h; y += spacing) {
                const dx = x - mx;
                const dy = y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const proximity = Math.max(0, 1 - dist / hoverRadius);

                // Dot radius grows near cursor  
                const r = baseRadius + proximity * 3;
                // Dot opacity increases near cursor
                const alpha = 0.35 + proximity * 0.55;

                ctx.beginPath();
                ctx.arc(x * dpr, y * dpr, r * dpr, 0, Math.PI * 2);

                // Blend from slate-600 to cyan-400 near cursor
                const red = Math.round(100 + proximity * (-100 + 34));
                const green = Math.round(116 + proximity * (-116 + 211));
                const blue = Math.round(139 + proximity * (-139 + 238));
                ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
                ctx.fill();

                // Draw faint connection lines to nearby dots within cursor influence
                if (proximity > 0.3) {
                    // Connect to right neighbor
                    if (x + spacing < w) {
                        const nd = Math.sqrt((x + spacing - mx) ** 2 + (y - my) ** 2);
                        const np = Math.max(0, 1 - nd / hoverRadius);
                        if (np > 0.3) {
                            ctx.beginPath();
                            ctx.moveTo(x * dpr, y * dpr);
                            ctx.lineTo((x + spacing) * dpr, y * dpr);
                            ctx.strokeStyle = `rgba(34, 211, 238, ${proximity * 0.15})`;
                            ctx.lineWidth = dpr;
                            ctx.stroke();
                        }
                    }
                    // Connect to bottom neighbor
                    if (y + spacing < h) {
                        const nd = Math.sqrt((x - mx) ** 2 + (y + spacing - my) ** 2);
                        const np = Math.max(0, 1 - nd / hoverRadius);
                        if (np > 0.3) {
                            ctx.beginPath();
                            ctx.moveTo(x * dpr, y * dpr);
                            ctx.lineTo(x * dpr, (y + spacing) * dpr);
                            ctx.strokeStyle = `rgba(34, 211, 238, ${proximity * 0.15})`;
                            ctx.lineWidth = dpr;
                            ctx.stroke();
                        }
                    }
                }
            }
        }

        animationRef.current = requestAnimationFrame(draw);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouse);
        animationRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
            cancelAnimationFrame(animationRef.current);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 1 }}
        />
    );
};

export default DotGrid;
