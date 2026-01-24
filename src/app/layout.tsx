import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yash Daxini | Full Stack Software Engineer',
  description:
    'Yash Daxini is a Full Stack Software Engineer experienced in building scalable web applications, distributed systems, and backend services, with hands-on experience in Docker, Kubernetes, and CI/CD, and actively learning DevOps and cloud technologies.',
  keywords: [
    // Personal branding (very important)
    'Yash Daxini',
    'Yash Daxini Software Engineer',
    'Yash Daxini Full Stack Developer',

    // Primary role
    'Full Stack Developer',
    'Software Engineer',
    'Backend Developer',
    'Frontend Developer',
    'Junior Software Engineer',

    // Frontend & Backend
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'REST APIs',
    'Microservices',
    'Monolith Architecture',
    'Web Application Development',

    // Distributed systems & backend concepts
    'Distributed Systems',
    'Rate Limiting',
    'High Concurrency Systems',
    'System Design',
    'Scalable Backend',

    // Containers & DevOps (learning / working knowledge)
    'Docker',
    'Kubernetes',
    'CI/CD',
    'TeamCity',
    'Containerized Applications',

    // Linux
    'Linux',
    'Linux System Administration',
    'Arch Linux',
    'Ubuntu',
    'Shell Scripting',

    // Databases
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',

    // Credibility & legacy SEO terms
    'Problem Solver',
    'Software Development',
    'Full Stack Web Developer'
  ],
  authors: [{ name: 'Yash Daxini' }],
  creator: 'Yash Daxini',
  publisher: 'Yash Daxini',
  openGraph: {
    title: 'Yash Daxini | Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer building scalable web applications and distributed systems, with hands-on experience in Docker, Kubernetes, and modern backend development.',
    url: 'https://yashdaxini.tech/',
    siteName: 'Yash Daxini Portfolio',
    images: [
      {
        url: 'https://yashdaxini.tech/og-image.png',
        secureUrl: 'https://yashdaxini.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yash Daxini Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yash Daxini | Full Stack Software Engineer',
    description:
      'Full Stack Engineer focused on scalable web apps, backend systems, and learning DevOps with Docker and Kubernetes.',
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
        <link rel="canonical" href="https://yashdaxini.tech/" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}