import React from 'react'

interface FooterProps {
    borderColor: string
}

const Footer: React.FC<FooterProps> = ({ borderColor }: FooterProps) => {
    return (
        <footer className={`border-t ${borderColor} py-8`}>
            <div className="container mx-auto px-4 text-center">
                <p className="font-mono text-sm opacity-70">
                    © 2025 | Built with Next.js & Tailwind CSS | Optimized for SEO
                </p>
            </div>
        </footer>
    )
}

export default Footer