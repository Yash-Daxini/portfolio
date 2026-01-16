import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yash Daxini | Full Stack & DevOps Engineer',
  description:
    'Full Stack and DevOps Engineer building scalable web applications and distributed systems. Experienced in React, Node.js, TypeScript, Redis, Linux, and cloud-native architecture with a strong focus on performance, reliability, and system design.',
  keywords: [
    'Yash Daxini',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'DevOps Engineer',
    'Distributed Systems',
    'System Design',
    'React',
    'Node.js',
    'TypeScript',
    'Redis',
    'Rate Limiter',
    'Event Calendar Application',
    'API Rate Limiting',
    'Microservices',
    'Docker',
    'Kubernetes',
    'Linux',
    'Arch Linux',
    'Web Performance Optimization'
  ],
  authors: [{ name: 'Yash Daxini' }],
  creator: 'Yash Daxini',
  publisher: 'Yash Daxini',

  openGraph: {
    title: 'Yash Daxini | Full Stack & DevOps Engineer',
    description:
      'Building high-performance web applications and distributed systems. Projects include a POS system, a distributed rate limiter, and a scalable comment system.',
    url: 'https://yourportfolio.com',
    siteName: 'Yash Daxini Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yash Daxini Portfolio Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Yash Daxini | Full Stack & DevOps Engineer',
    description:
      'Full Stack & DevOps Engineer building scalable systems, distributed rate limiters, and performance-focused web applications.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourportfolio.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}