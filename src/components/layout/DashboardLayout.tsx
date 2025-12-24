import React from 'react';
import { NavTab, TopNavBar } from './TopNavBar';
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

interface DashboardLayoutProps {
    children: React.ReactNode;
    currentTab: NavTab;
    onNavigate?: (page: NavTab) => void;
    showBackground?: boolean;
}

export function DashboardLayout({
    children,
    currentTab,
    onNavigate,
    showBackground = true,
    contentScrollable = true
}: DashboardLayoutProps & { contentScrollable?: boolean }) {

    const handleTabChange = (tab: NavTab) => {
        if (onNavigate) {
            onNavigate(tab);
        }
    };

    const handleProfileClick = () => {
        if (onNavigate) {
            onNavigate('profile');
        }
    };

    return (
        <div className="bg-[#0f0f0f] h-screen w-full flex flex-col relative overflow-hidden">
            {showBackground && <BackgroundDecor />}

            <TopNavBar
                currentTab={currentTab}
                onTabChange={handleTabChange}
                onProfileClick={handleProfileClick}
            />

            <div className={`flex-1 flex flex-col relative z-10 ${contentScrollable ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                {children}
            </div>
        </div>
    );
}
