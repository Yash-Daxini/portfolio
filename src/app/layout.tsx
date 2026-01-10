import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Name | DevOps Engineer & Cloud Architect',
  description: 'DevOps Engineer specializing in Kubernetes, AWS, Terraform, CI/CD automation, and cloud-native infrastructure. Building scalable systems.',
  keywords: [
    'DevOps Engineer',
    'Cloud Architect',
    'Kubernetes',
    'Docker',
    'AWS',
    'Terraform',
    'CI/CD',
    'Infrastructure as Code',
    'Linux System Administrator',
    'Arch Linux'
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  openGraph: {
    title: 'Your Name | DevOps Engineer',
    description: 'Building scalable cloud infrastructure and automating everything',
    url: 'https://yourportfolio.com',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | DevOps Engineer',
    description: 'Building scalable cloud infrastructure',
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