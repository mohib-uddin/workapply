import React from 'react';
import { LayoutDashboard, ListTodo, Send, User } from 'lucide-react';
import UserService from '@/services/user.service';
import { NavTab } from './TopNavBar';

interface BottomNavBarProps {
    currentTab: NavTab;
    onTabChange: (tab: NavTab) => void;
}

export function BottomNavBar({ currentTab, onTabChange }: BottomNavBarProps) {
    const { useFetchCurrentSubscription } = UserService();
    const { data: subscription } = useFetchCurrentSubscription();
    const isSubscribed = !!subscription;

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-[#1a1a1a] h-[64px] flex items-center justify-around px-2 z-50 padding-bottom-safe">
            <NavItem
                active={currentTab === 'dashboard'}
                icon={<LayoutDashboard className="size-6" />}
                label="Dashboard"
                onClick={() => onTabChange('dashboard')}
            />

            {isSubscribed && (
                <>
                    <NavItem
                        active={currentTab === 'queue'}
                        icon={<ListTodo className="size-6" />}
                        label="Queue"
                        onClick={() => onTabChange('queue')}
                    />
                    <NavItem
                        active={currentTab === 'applications'}
                        icon={<Send className="size-6" />}
                        label="Applied"
                        onClick={() => onTabChange('applications')}
                    />
                </>
            )}

            <NavItem
                active={currentTab === 'profile'}
                icon={<User className="size-6" />}
                label="Profile"
                onClick={() => onTabChange('profile')}
            />
        </div>
    );
}

function NavItem({ active, icon, label, onClick }: { active: boolean; icon: React.ReactNode; label: string; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center gap-1 min-w-[64px] h-full ${active ? 'text-[#611dcd]' : 'text-[#9ba1a5] hover:text-[#faf9f6]'
                }`}
        >
            <div className={`transition-colors duration-200 ${active ? 'text-[#611dcd]' : 'text-current'}`}>
                {icon}
            </div>
            <span className="text-[10px] font-medium font-['Pavanam',sans-serif]">{label}</span>
        </button>
    );
}
