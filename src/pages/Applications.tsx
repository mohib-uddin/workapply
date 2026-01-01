import React, { useState } from 'react';
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    Briefcase,
    CheckCircle2,
    Clock,
    Eye,
    MapPin,
    Search,
    Send,
    Layers,
    DollarSign,
    Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';
import svgPaths from "@/components/ui/icons/job-queue-svg";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

// Mock Data Interfaces
interface Application {
    id: number;
    jobTitle: string;
    company: string;
    matchScore: number;
    status: 'applied' | 'in_queue' | 'completed' | 'viewed' | 'rejected' | 'interview';
    location: string;
    appliedDate: string;
    salary: string;
}

// Mock Data
const MOCK_APPLICATIONS: Application[] = [
    {
        id: 1,
        jobTitle: 'Senior Software Engineer [Boston]',
        company: '8thlightrebuild',
        matchScore: 52,
        status: 'in_queue',
        location: 'Boston, MA',
        appliedDate: '2d ago',
        salary: '$140k - $180k'
    },
    {
        id: 2,
        jobTitle: 'Senior Software Engineer [Chicago]',
        company: '8thlightrebuild',
        matchScore: 53,
        status: 'in_queue',
        location: 'Chicago, IL',
        appliedDate: '3d ago',
        salary: '$135k - $175k'
    },
    {
        id: 3,
        jobTitle: 'Full Stack Engineer - Portugal',
        company: '60decibelsinc',
        matchScore: 56,
        status: 'in_queue',
        location: 'Portugal (Remote)',
        appliedDate: '5d ago',
        salary: '€60k - €85k'
    },
    {
        id: 4,
        jobTitle: 'Backend Software Engineer',
        company: 'virtru',
        matchScore: 54,
        status: 'applied',
        location: 'Washington, DC',
        appliedDate: '1w ago',
        salary: '$130k+'
    },
    {
        id: 5,
        jobTitle: 'Sr. Software Engineer - Frontend',
        company: 'veza',
        matchScore: 52,
        status: 'completed',
        location: 'Remote, USA',
        appliedDate: '1w ago',
        salary: '$150k - $200k'
    },
    {
        id: 6,
        jobTitle: 'Front-end Software Engineer',
        company: 'veza',
        matchScore: 51,
        status: 'viewed',
        location: 'Remote, India',
        appliedDate: '2w ago',
        salary: '₹25L - ₹45L'
    },
];

// Components

function StatsCard({
    icon: Icon,
    count,
    label,
}: {
    icon: any,
    count: number,
    label: string,
}) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="bg-[#1a1a1a] border border-[#faf9f6]/10 rounded-[8px] p-[20px] flex items-center gap-[20px] shadow-sm hover:border-[#faf9f6]/20 transition-all cursor-default relative overflow-hidden group"
        >
            <div className={`size-[48px] rounded-full bg-[#0f0f0f] border border-[#faf9f6]/10 flex items-center justify-center shrink-0 group-hover:bg-[#151515] transition-colors`}>
                {/* User requested white icons */}
                <Icon className="size-[20px] text-white" />
            </div>
            <div className="flex flex-col">
                <h3 className="font-['Pavanam',sans-serif] text-[28px] leading-[1.1] text-[#faf9f6] font-medium">{count}</h3>
                <p className="font-['Pavanam',sans-serif] text-[14px] text-[#9ba1a5] opacity-80">{label}</p>
            </div>
        </motion.div>
    );
}

const getMatchPath = (score: number) => {
    // Expecting score 0-100
    const normalized = score / 100;
    if (normalized >= 0.9) return svgPaths.p38a04c80; // Full circle
    if (normalized >= 0.8) return svgPaths.p2996e700;
    if (normalized >= 0.7) return svgPaths.p10ec5000;
    if (normalized >= 0.6) return svgPaths.p241ef740;
    return svgPaths.p3d0e500; // Low match
};

// Match Circle for Table
function TableMatchCircle({ score }: { score: number }) {
    const isGoodMatch = score >= 70;
    const isFairMatch = score >= 50 && score < 70;
    const pathData = getMatchPath(score);

    return (
        <div className="flex items-center gap-3">
            <div className="relative size-9 shrink-0">
                <svg className="size-full rotate-[-90deg]" viewBox="0 0 55 55">
                    <path d={pathData} fill={isGoodMatch ? "#611DCD" : isFairMatch ? "#9BA1A5" : "#4a4a4a"} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-['Pavanam',sans-serif] text-[11px] text-[#faf9f6] font-bold">
                    {score}%
                </div>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
                <span className="text-[10px] font-['Pavanam',sans-serif] text-[#faf9f6] uppercase tracking-wider opacity-60">
                    {isGoodMatch ? 'Good' : 'Fair'}
                </span>
                <span className="text-[10px] font-['Pavanam',sans-serif] text-[#faf9f6] uppercase tracking-wider opacity-60">
                    Match
                </span>
            </div>
        </div>
    );
}

function StatusPill({ status }: { status: string }) {
    // Improved colors for premium dark theme feel
    // Using subtle backgrounds with brighter text/borders or glass effect
    const getStatusStyles = (s: string) => {
        switch (s) {
            case 'in_queue':
                return 'bg-[#9BA1A5]/10 text-[#9BA1A5] border-[#9BA1A5]/20'; // Neutral / Waiting
            case 'applied':
                return 'bg-[#611dcd]/10 text-[#a78bfa] border-[#611dcd]/30'; // Brand Purple
            case 'completed':
                return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'; // Success
            case 'viewed':
                return 'bg-blue-500/10 text-blue-400 border-blue-500/20'; // Info
            case 'rejected':
                return 'bg-red-500/10 text-red-400 border-red-500/20'; // Warning/Error
            case 'interview':
                return 'bg-amber-500/10 text-amber-400 border-amber-500/20'; // Highlight
            default:
                return 'bg-[#2a2a2a] text-[#9ba1a5] border-[#404040]';
        }
    };

    const formatStatus = (s: string) => {
        return s.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return (
        <div className={`inline-flex items-center justify-center px-3 py-1 rounded-[4px] border text-[12px] font-medium font-['Pavanam',sans-serif] tracking-wide w-fit ${getStatusStyles(status)}`}>
            {formatStatus(status)}
        </div>
    );
}

export function Applications({ onNavigate }: { onNavigate?: (page: 'dashboard' | 'queue' | 'applications' | 'profile') => void }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredApps = MOCK_APPLICATIONS.filter(app =>
        app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <DashboardLayout currentTab="applications" onNavigate={onNavigate} showBackground={false} contentScrollable={true}>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <BackgroundDecor />
            </div>

            <div className="flex-1 flex flex-col p-6 lg:p-10 max-w-[1600px] mx-auto w-full relative z-10 h-full">

                {/* Header Section */}
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#611dcd]/20 p-2 rounded-lg">
                            <Send className="text-[#611dcd] size-6" />
                        </div>
                        <h1 className="font-['Pavanam',sans-serif] text-[#faf9f6] text-[28px] lg:text-[32px] font-semibold leading-tight">
                            Completed Applications
                        </h1>
                    </div>
                    <p className="font-['Pavanam',sans-serif] text-[#9ba1a5] text-[16px] ml-[52px]">
                        Track your job applications and their progress
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    <StatsCard
                        icon={Layers} // Changed from MoreHorizontal to Layers (Stack of apps)
                        count={522}
                        label="Total Applications"
                    />
                    <StatsCard
                        icon={Clock} // Changed from CheckCircle2 to Clock (Waiting/Applied/In Progress often implies time, but 'Applied' in this context of 0 creates confusion. Let's stick to the user's implicit structure or better yet, make it logical. The user has "Applied 0", "In Queue 522". "Applied" might mean manually applied?)
                        // Actually, let's use 'Send' for Applied (Action sent)
                        count={0}
                        label="Applied"
                    />
                    <StatsCard
                        icon={Eye} // Kept Eye for In Queue (Watching/Waiting/In View) or could be Hourglass
                        count={522}
                        label="In Queue"
                    />
                    <StatsCard
                        icon={CheckCircle2} // Kept Send for Completed? No, CheckCircle is better for 'Completed'
                        count={140}
                        label="Completed"
                    />
                </div>

                {/* Applications List */}
                <div className="bg-[#1a1a1a] border border-[#faf9f6]/10 rounded-xl overflow-hidden shadow-2xl flex-1 flex flex-col min-h-0">

                    {/* Table Header */}
                    {/* Adjusted Grid Columns: Title(2), Company(1.5), Salary(1), Match(1), Status(1), Date(0.8), Location(1.2) */}
                    <div className="grid grid-cols-[1.8fr_1.2fr_1fr_0.8fr_1.2fr_1fr_1.2fr] gap-4 p-5 border-b border-[#faf9f6]/10 bg-[#0f0f0f]/50 text-[#9ba1a5] text-[13px] font-['Pavanam',sans-serif] uppercase tracking-wider font-semibold sticky top-0 z-10 backdrop-blur-sm">
                        <div className="pl-2">Job Title</div>
                        <div>Company</div>
                        <div>Salary</div>
                        <div>Match Score</div>
                        <div>Status</div>
                        <div>Applied Date</div>
                        <div className="text-right pr-2">Location</div>
                    </div>

                    {/* Table Body */}
                    <div className="overflow-y-auto flex-1">
                        {filteredApps.map((app, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                key={app.id}
                                className="grid grid-cols-[1.8fr_1.2fr_1fr_0.8fr_1.2fr_1fr_1.2fr] gap-4 p-5 border-b border-[#faf9f6]/5 text-[#faf9f6] text-[15px] font-['Pavanam',sans-serif] items-center hover:bg-[#faf9f6]/[0.02] transition-colors group cursor-default"
                            >
                                {/* Job Title */}
                                <div className="font-medium text-[16px] pl-2 group-hover:text-white transition-colors truncate pr-4" title={app.jobTitle}>
                                    {app.jobTitle}
                                </div>

                                {/* Company */}
                                <div className="flex items-center gap-2 text-[#9ba1a5] group-hover:text-[#faf9f6] transition-colors">
                                    <Briefcase className="size-3.5 opacity-50 text-[#611dcd]" />
                                    <span className="truncate" title={app.company}>{app.company}</span>
                                </div>

                                {/* Salary - New Column */}
                                <div className="text-[#9ba1a5] group-hover:text-[#faf9f6] transition-colors flex items-center gap-1.5">
                                    <span className="truncate" title={app.salary}>{app.salary}</span>
                                </div>

                                {/* Match Score */}
                                <div>
                                    <TableMatchCircle score={app.matchScore} />
                                </div>

                                {/* Status - Improved Badge */}
                                <div>
                                    <StatusPill status={app.status} />
                                </div>

                                {/* Applied Date - New Column */}
                                <div className="text-[#9ba1a5] text-[14px]">
                                    {app.appliedDate}
                                </div>

                                {/* Location */}
                                <div className="flex items-center justify-end gap-2 text-[#9ba1a5] truncate text-right pr-2">
                                    <span className="truncate" title={app.location}>{app.location}</span>
                                    <MapPin className="size-3.5 opacity-50 shrink-0 text-[#611dcd]" />
                                </div>

                            </motion.div>
                        ))}

                        {filteredApps.length === 0 && (
                            <div className="p-10 text-center text-[#9ba1a5] font-['Pavanam',sans-serif]">
                                No applications found.
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}
