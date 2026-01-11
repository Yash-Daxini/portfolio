import { Activity, Cloud, Code, Database, Monitor, Server } from 'lucide-react';


export const PROJECTS = [
    {
        title: 'Kubernetes Auto-Scaler',
        desc: 'Custom HPA implementation with predictive scaling based on historical metrics and ML predictions',
        tech: ['Kubernetes', 'Python', 'Prometheus', 'Go'],
        github: 'https://github.com/yourusername/k8s-autoscaler',
        live: '#'
    },
    {
        title: 'Multi-Cloud Terraform Modules',
        desc: 'Reusable IaC modules for deploying infrastructure across AWS, Azure, and GCP with unified configuration',
        tech: ['Terraform', 'AWS', 'Azure', 'GCP'],
        github: 'https://github.com/yourusername/terraform-modules',
        live: '#'
    },
    {
        title: 'CI/CD Pipeline Automation',
        desc: 'End-to-end GitOps pipeline with automated testing, security scanning, and deployment',
        tech: ['GitLab CI', 'Docker', 'ArgoCD', 'Kubernetes'],
        github: 'https://github.com/yourusername/cicd-automation',
        live: '#'
    },
    {
        title: 'Infrastructure Monitoring Suite',
        desc: 'Comprehensive monitoring solution with custom dashboards and automated incident response',
        tech: ['Prometheus', 'Grafana', 'AlertManager', 'Python'],
        github: 'https://github.com/yourusername/monitoring-suite',
        live: '#'
    },
    {
        title: 'Container Security Scanner',
        desc: 'Automated vulnerability scanning tool for Docker images integrated into CI/CD pipeline',
        tech: ['Python', 'Docker', 'Trivy', 'Jenkins'],
        github: 'https://github.com/yourusername/container-scanner',
        live: '#'
    },
    {
        title: 'Log Aggregation Platform',
        desc: 'Centralized logging system using ELK stack with custom parsers and visualization',
        tech: ['Elasticsearch', 'Logstash', 'Kibana', 'Filebeat'],
        github: 'https://github.com/yourusername/log-platform',
        live: '#'
    }
];

export const SKILLS = {
    devops: {
        icon: <Server size={20} />,
        items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible', 'ArgoCD']
    },
    cloud: {
        icon: <Cloud size={20} />,
        items: ['AWS', 'Azure', 'GCP', 'DigitalOcean']
    },
    linux: {
        icon: <Monitor size={20} />,
        items: ['Ubuntu', 'CentOS', 'Arch Linux', 'Shell Scripting', 'System Administration']
    },
    monitoring: {
        icon: <Activity size={20} />,
        items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    },
    languages: {
        icon: <Code size={20} />,
        items: ['Python', 'Bash', 'JavaScript', 'Go', 'YAML']
    },
    databases: {
        icon: <Database size={20} />,
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL']
    }
};