/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutDashboard, Dumbbell, BookOpen, User, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const tabs = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'workouts', label: 'Training Plan', icon: Zap },
    { id: 'exercises', label: 'Library', icon: BookOpen },
    { id: 'profile', label: 'Performance', icon: User },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 border-r border-[#1F1F21] bg-[#0F0F12] flex-col p-8 z-50">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl text-white">I</div>
          <span className="text-xl font-bold tracking-tight">IRON<span className="text-indigo-500">TRACK.</span></span>
        </div>
        
        <nav className="space-y-6 flex-1">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 ml-4">Main Menu</p>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 py-3 px-4 rounded-lg transition-all text-left",
                    isActive 
                      ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="mt-auto">
          <div className="p-4 bg-[#1A1A1E] rounded-2xl border border-[#2A2A2E]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
              <div>
                <p className="text-xs font-semibold">Gabriel Bacelar</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">PRO Member</p>
              </div>
            </div>
            <div className="w-full bg-[#0A0A0B] h-1 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-3/4"></div>
            </div>
            <p className="text-[9px] mt-2 text-gray-400 text-center uppercase tracking-widest">Level 24</p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F0F12]/80 backdrop-blur-lg border-t border-[#1F1F21]">
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all p-2",
                  isActive ? "text-indigo-400" : "text-gray-500"
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="text-[9px] font-bold uppercase tracking-tighter">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
