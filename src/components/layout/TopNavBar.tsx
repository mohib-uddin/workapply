import React from 'react';
import svgPathsDashboard from "@/components/ui/icons/dashboard-svg";
import imgLogo from "figma:asset/183455f9c95614951c915b43688a9887b44c6a17.png";

export type NavTab = 'dashboard' | 'queue' | 'applications' | 'profile';

interface TopNavBarProps {
    currentTab: NavTab;
    onTabChange: (tab: NavTab) => void;
    onProfileClick: () => void;
}

import UserService from '@/services/user.service';
import { Spinner } from '../ui/Spinner';

export function TopNavBar({ currentTab, onTabChange, onProfileClick }: TopNavBarProps) {
    const { useFetchCurrentSubscription } = UserService();
    const { data: subscription, isLoading } = useFetchCurrentSubscription();

    const isSubscribed = !!subscription;

    return (
        <div className="bg-[#0f0f0f] w-full flex h-[56px] items-center justify-between px-[20px] sm:px-[40px] lg:px-[80px] py-0 border-b border-[#1a1a1a] shrink-0 z-50">
            {/* Logo */}
            <div
                className="content-stretch flex gap-[10px] h-full items-center p-[10px] relative shrink-0 cursor-pointer"
                onClick={() => onTabChange('dashboard')}
            >
                <div className="relative shrink-0 size-[40px]">
                    <img alt="WorkApply Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
                </div>
                <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                    <p className="leading-[18px]">WorkApply</p>
                </div>
            </div>

            {/* Menu + Icons */}
            <div className="content-stretch flex gap-[40px] lg:gap-[100px] h-full items-center justify-end relative shrink-0">
                {/* Menu Options */}
                <div className="hidden md:flex content-stretch gap-[24px] lg:gap-[40px] h-full items-center relative shrink-0">
                    {isLoading ? (
                        <Spinner className="size-4 text-white/50" />
                    ) : isSubscribed ? (
                        <>
                            <NavItem
                                active={currentTab === 'queue'}
                                label="Job Queue"
                                onClick={() => onTabChange('queue')}
                            />
                            <NavItem
                                active={currentTab === 'applications'}
                                label="Applications"
                                onClick={() => onTabChange('applications')}
                            />
                        </>
                    ) : (
                        <NavItem
                            active={currentTab === 'dashboard'}
                            label="Dashboard"
                            onClick={() => onTabChange('dashboard')}
                        />
                    )}
                </div>

                {/* Notif + Profile */}
                <div className="content-stretch flex gap-[24px] lg:gap-[36px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[28px] cursor-pointer">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                            <path d={svgPathsDashboard.p3d8d6500} fill="#FAF9F6" />
                        </svg>
                    </div>
                    <div
                        className="h-full flex items-center justify-center relative shrink-0 cursor-pointer"
                        onClick={onProfileClick}
                    >
                        {currentTab === 'profile' && (
                            <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
                        )}
                        <div className="relative shrink-0 size-[28px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                                <path d={svgPathsDashboard.pd664880} fill="#FAF9F6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NavItem({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
    return (
        <div
            className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0 cursor-pointer"
            onClick={onClick}
        >
            {active && (
                <div aria-hidden="true" className="absolute border-[#611dcd] border-[0px_0px_4px] border-solid inset-0 pointer-events-none" />
            )}
            <div className="flex flex-col font-['Pavanam',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[18px]">{label}</p>
            </div>
        </div>
    );
}
