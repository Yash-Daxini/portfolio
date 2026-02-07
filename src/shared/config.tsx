import { Code, Database, FrameIcon, Monitor, Server } from 'lucide-react';

interface Project {
    title: string,
    description: string,
    tech: string[],
    githubLink?: string,
    liveLink?: string,

}

export const PROJECTS: Project[] = [
    {
        title: 'Multi-Tenant POS Platform',
        description: 'Designed and delivered production-grade features for a scalable POS system supporting multiple tenants, focusing on performance, reliability, and seamless data flow.',
        tech: ['Angular', '.NET', 'Microservices', 'MSSQL', 'Mongo DB', 'Docker', 'TeamCity']
    },
    {
        title: 'Smart Home Automation Integrations',
        description: 'Developed HomeSeer plugins enabling integration of smart locks, sensors, Wi-Fi bulbs, and gateways, ensuring fault-tolerant automation and reliable device communication.',
        tech: ['React', 'C#', '.NET', 'Javascript', 'Jquery', 'Sqlite']
    },
    {
        title: 'Online Ordering Web Platform',
        description: 'Built responsive and accessible user interfaces for an online ordering system, enhancing customer experience through intuitive design and optimized frontend performance.',
        tech: ['Angular', 'Typescript', '.NET', 'Mongo DB', 'Android APKs', 'IOS builds']
    },
    {
        title: 'Algorithmic Trading Platform',
        description: 'Contributed to a high-performance trading platform by leading frontend development and optimizing backend data processing using caching techniques.',
        tech: ['React', '.NET', 'MySQL', 'Redis', 'Docker', 'Node JS']
    },
    {
        title: 'CI/CD & Deployment Automation',
        description: 'Created and maintained automated build and deployment pipelines using TeamCity, improving release consistency, reducing manual effort, and supporting QA and staging environments.',
        tech: ['CI/CD', 'Docker', 'TeamCity']
    },
    {
        title: 'Cross-Platform Mobile App Packaging',
        description: 'Built Android APKs for Angular applications using the',
        tech: ['Angular', 'Ionic', 'TeamCity']
    },
    {
        title: 'Customizable Event Calendar',
        description: 'Built a Microsoft Outlook–inspired calendar application featuring recurring events and optimized overlap-detection algorithms, ensuring reliable scheduling and strong performance even with large event datasets.',
        tech: ['React', '.NET', 'MSSQL'],
        githubLink: 'https://github.com/Yash-Daxini/Customizable-Event-Calendar-Backend'
    },
    {
        title: 'Distributed Rate Limiter',
        description: 'Designed and implemented a high-performance distributed rate limiter to control API traffic across multiple servers, using atomic Redis operations and concurrency-safe algorithms for accuracy under heavy load.',
        tech: ['Typescript', 'Node JS', 'React', 'Redis'],
        githubLink: 'https://github.com/Yash-Daxini/rate-limiter'
    },
    {
        title: 'Interactive Comment System',
        description: 'Developed a scalable comment system supporting posts, nested replies, and upvote/downvote functionality, focusing on responsive UI design and efficient backend data handling.',
        tech: ['React', 'php-slim', 'MySQL',],
        githubLink: 'https://github.com/Yash-Daxini/comment_system_react-slim'
    }
];

export const SKILLS = {
    devops: {
        icon: <Server size={20} />,
        items: ['CI/CD Concepts', 'TeamCity (Build & Deployment Pipelines)', 'Docker', 'Deployment Automation', 'IIS']
    },
    linux: {
        icon: <Monitor size={20} />,
        items: ['Arch Linux', 'Ubuntu', 'Linux Fundamentals', 'Shell Basics', 'System Configuration & Troubleshooting']
    },
    languages: {
        icon: <Code size={20} />,
        items: ['C#', 'JavaScript', 'TypeScript', 'Java']
    },
    databases: {
        icon: <Database size={20} />,
        items: ['Microsoft SQL Server', 'MySQL', 'MongoDB', 'Redis', 'PostgreSQL']
    },
    frameWorks:{
        icon: <FrameIcon size={20} />,
        items: ['React', 'Angular', 'Node JS', '.NET']
    }
};

export const ABOUT = `I build scalable, reliable applications across the full stack using Angular, React, .NET, and Node.js. I’ve worked on multi-tenant systems, POS platforms, smart-home integrations, and applications spanning monolithic, microservices, cloud, and on-premise architectures.
I’m actively deepening my expertise in Linux and DevOps, exploring CI / CD, automation, and system reliability while continuously improving how software is built, deployed, and maintained.`

export const EMAIL = "yashdaxini2003@gmail.com";
export const GITHUB = "https://github.com/Yash-Daxini";
export const LINKEDIN = "https://linkedin.com/in/yash-daxini";
export const GITHUB_USERNAME = "Yash-Daxini"
export const LINKEDIN_USERNAME = "in/yash-daxini";