/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Activity, Flame, Trophy, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { name: 'Seg', calories: 2100 },
  { name: 'Ter', calories: 1800 },
  { name: 'Qua', calories: 2400 },
  { name: 'Qui', calories: 2200 },
  { name: 'Sex', calories: 2800 },
  { name: 'Sáb', calories: 1500 },
  { name: 'Dom', calories: 1900 },
];

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10 selection-accent"
    >
      <header className="flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Good Morning, Gabriel</h1>
          <p className="text-gray-500 text-sm italic">"The only bad workout is the one that didn't happen."</p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Session Streak</p>
          <p className="text-3xl font-mono font-bold text-indigo-400 neon-glow">14 DAYS</p>
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card-strong rounded-[32px] p-8 flex flex-col justify-between min-h-[320px]">
          <div>
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-full border border-indigo-500/20 uppercase tracking-widest">Next Session</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tighter">Hypertrophy <span className="text-indigo-500 uppercase">A</span></h2>
            <p className="text-gray-400 mt-2 max-w-sm">Foco: Peito, Ombros e Tríceps. Intensidade alvo: 85% RPE.</p>
          </div>
          <div className="flex flex-wrap items-center gap-8 mt-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Est. Time</span>
              <span className="text-xl font-bold font-mono">75 MINS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Exercises</span>
              <span className="text-xl font-bold font-mono">8 UNITS</span>
            </div>
            <button className="md:ml-auto bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-gray-200 transition-all uppercase text-xs tracking-widest active:scale-95 shadow-xl shadow-white/5">
              Start Workout
            </button>
          </div>
        </div>

        <div className="bg-[#0F0F12] border border-[#2A2A2E] rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-8 w-full text-left">Recovery Status</h3>
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-[#1A1A1E]" />
              <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="452" strokeDashoffset="113" className="text-indigo-500 transition-all duration-1000" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold font-mono">75%</span>
              <span className="text-[9px] uppercase font-black text-gray-500 tracking-widest">Optimized</span>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-400 leading-relaxed max-w-[180px]">
            Fadiga muscular está baixa. Pronto para alta intensidade.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Kcal', value: '842', unit: 'kcal', barColor: 'bg-rose-500', progress: 80 },
          { label: 'Weekly Steps', value: '12,402', unit: null, barColor: 'bg-emerald-500', progress: 100 },
          { label: 'Sleep Score', value: '88', unit: 'pts', barColor: 'bg-indigo-500', progress: 88 },
          { label: 'Volume/Week', value: '24', unit: 'tons', barColor: 'bg-amber-500', progress: 65 },
        ].map((metric, idx) => (
          <div key={idx} className="bg-[#0F0F12] border border-[#1F1F21] rounded-2xl p-5 group hover:border-indigo-500/30 transition-colors">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{metric.label}</p>
            <p className="text-2xl font-bold font-mono">
              {metric.value} {metric.unit && <span className="text-xs font-normal text-gray-500 uppercase ml-1">{metric.unit}</span>}
            </p>
            <div className="mt-4 h-1 bg-[#1A1A1E] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${metric.progress}%` }}
                className={cn("h-full", metric.barColor)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-[32px] p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl tracking-tight">Activity Forecast</h2>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <div className="w-2 h-2 rounded-full bg-[#1A1A1E]"></div>
          </div>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorInd" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1F1F21" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#4b5563', fontSize: 10, fontWeight: 700 }} dy={10} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0F0F12', borderRadius: '12px', border: '1px solid #1F1F21', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                itemStyle={{ fill: '#6366f1' }}
              />
              <Area type="monotone" dataKey="calories" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorInd)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

