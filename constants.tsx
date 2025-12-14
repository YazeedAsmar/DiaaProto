import React from 'react';
import { Database, Calendar, Users, Clock, Target, Lightbulb, Briefcase, RefreshCw } from 'lucide-react';
import { Project, Skill, Experience } from './types';

export const SOCIAL_LINKS = {
  github: "#", // Github not provided in resume
  linkedin: "https://www.linkedin.com/in/diaa-alsawalhi-94409a232",
  email: "mailto:diaaalsawalhi@gmail.com"
};

export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: "Diaa Aldeen Alsawalhi",
  role: "HRMS Officer & Project Manager",
  tagline: "Optimizing business processes through effective project management and HRMS solutions.",
  description: "I specialize in HRMS implementation, project planning, and data migration. With a strong background in Business Information Technology, I bridge the gap between technical systems and operational needs."
};

export const ABOUT_CONTENT = {
  bio: "I am a dedicated HRMS Officer and Project Manager based in Amman, Jordan. A graduate of the University of Jordan in Business Information Technology, I have a passion for organizing complex projects and ensuring successful system implementations. My experience spans from freelance project management to full-scale HRMS deployment at Menaitech, where I handle everything from client training to data migration. I pride myself on adaptability, problem-solving, and the ability to work effectively under pressure."
};

export const SKILLS: Skill[] = [
  { name: 'Project Planning', icon: <Calendar className="w-6 h-6" />, category: 'Tools' },
  { name: 'HRMS', icon: <Database className="w-6 h-6" />, category: 'Tools' },
  { name: 'Teamwork', icon: <Users className="w-6 h-6" />, category: 'Other' },
  { name: 'Time Management', icon: <Clock className="w-6 h-6" />, category: 'Other' },
  { name: 'Problem Solving', icon: <Lightbulb className="w-6 h-6" />, category: 'Other' },
  { name: 'Business IT', icon: <Briefcase className="w-6 h-6" />, category: 'Backend' },
  { name: 'Adaptability', icon: <RefreshCw className="w-6 h-6" />, category: 'Other' },
  { name: 'Target Oriented', icon: <Target className="w-6 h-6" />, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "HRMS Implementation",
    description: "Managed the full implementation process of HRMS at Menaitech. Conducted system training, planned projects, and executed complex data migrations for clients.",
    tags: ["Project Management", "Data Migration", "Training", "Menaitech"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    github: ""
  },
  {
    id: 2,
    title: "Freelance Project Management",
    description: "Coordinated between teams and ensured successful execution of short-term projects within timeline for Alramz company in Riyadh, KSA.",
    tags: ["Coordination", "Freelance", "Leadership"],
    imageUrl: "https://images.unsplash.com/photo-1507537297725-24a1c4325ca8?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    github: ""
  },
  {
    id: 3,
    title: "Sales & Customer Service",
    description: "Handled sales transactions and ensured excellent customer service at Alrehan Roasters. Developed strong communication and adaptability skills.",
    tags: ["Sales", "Customer Service", "Communication"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    github: ""
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "HRMS Officer",
    company: "Menaitech",
    period: "14 July 2024 - Present",
    description: "Currently working in HRMS with a focus on project management. I participate in client meetings, conduct system training sessions, and manage the full implementation process including planning projects and migrating data."
  },
  {
    id: 2,
    role: "Freelance Project Manager",
    company: "Alramz Company - Riyadh",
    period: "Feb 2025 - April 2025",
    description: "Managed and delivered a short-term project, coordinating between teams and ensuring successful execution within timeline."
  },
  {
    id: 3,
    role: "Customer Sales",
    company: "Alrehan Roasters",
    period: "June 2022 - Sep 2022",
    description: "Responsibilities included welcoming customers, helping them choose products, handling sales transactions, and ensuring excellent customer service."
  }
];