/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Settings, Shield, Bell, LogOut, Award, Calendar, Weight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Profile() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="w-40 h-40 rounded-full border-4 border-[#1F1F21] p-1.5 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriel" 
              alt="Avatar" 
              className="w-full h-full rounded-full bg-[#0F0F12] border-2 border-[#1F1F21]"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute bottom-2 right-2 p-3 bg-indigo-600 rounded-2xl border-4 border-[#0A0A0B] shadow-xl shadow-indigo-600/20"
          >
            <Award className="w-5 h-5 text-white" />
          </motion.div>
        </div>
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Gabriel Bacelar</h1>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-[10px]">Elite Member since Oct 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0F0F12] border border-[#1F1F21] p-6 rounded-[24px] flex items-center gap-5 group hover:border-indigo-500/30 transition-colors">
          <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
            <Weight className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-0.5">Current Weight</p>
            <p className="text-2xl font-bold font-mono">82.5 <span className="text-sm font-normal text-gray-500">KG</span></p>
          </div>
        </div>
        <div className="bg-[#0F0F12] border border-[#1F1F21] p-6 rounded-[24px] flex items-center gap-5 group hover:border-emerald-500/30 transition-colors">
          <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
            <Calendar className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-0.5">Peak Streak</p>
            <p className="text-2xl font-bold font-mono">14 <span className="text-sm font-normal text-gray-500 uppercase tracking-widest ml-1">Days</span></p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[10px] uppercase font-black text-gray-500 tracking-[0.3em] ml-6">Account Settings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Settings, label: 'Workout Preferences', desc: 'Personalize goals & rest times' },
            { icon: Shield, label: 'Privacy & Security', desc: 'Data encryption & OAuth' },
            { icon: Bell, label: 'Notification Hub', desc: 'Hydration & session reminders' },
            { icon: LogOut, label: 'Sign Out Session', desc: 'Securely terminate access', danger: true },
          ].map((item, idx) => (
            <button 
              key={idx}
              className={cn(
                "group flex items-center gap-4 p-5 rounded-[24px] bg-[#0F0F12] border border-[#1F1F21] text-left transition-all hover:bg-[#1A1A1E]",
                item.danger ? "hover:border-rose-500/30" : "hover:border-indigo-500/30"
              )}
            >
              <div className={cn(
                "p-3 rounded-xl transition-colors",
                item.danger ? "bg-rose-500/10 text-rose-500 group-hover:bg-rose-500/20" : "bg-white/5 text-gray-400 group-hover:text-indigo-400"
              )}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="grow">
                <p className={cn("font-bold tracking-tight", item.danger ? "text-rose-500" : "text-white group-hover:text-indigo-400")}>{item.label}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
