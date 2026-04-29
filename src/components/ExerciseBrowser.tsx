/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXERCISES } from '../constants';
import { Search, Info, Play } from 'lucide-react';
import { cn } from '../lib/utils';

export function ExerciseBrowser() {
  const [search, setSearch] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('Todos');

  const muscles = ['Todos', ...new Set(EXERCISES.map(e => e.muscle))];

  const filtered = EXERCISES.filter(ex => {
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = selectedMuscle === 'Todos' || ex.muscle === selectedMuscle;
    return matchesSearch && matchesMuscle;
  });

  return (
    <div className="space-y-8">
      <header className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Biblioteca</h1>
          <p className="text-gray-400">Aprenda a execução correta de cada movimento</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text"
              placeholder="Search exercise..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-[#0F0F12] border border-[#1F1F21] rounded-2xl focus:outline-none focus:border-indigo-500/50 transition-all font-medium selection-accent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:pb-0">
            {muscles.map(muscle => (
              <button
                key={muscle}
                onClick={() => setSelectedMuscle(muscle)}
                className={cn(
                  "px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all border",
                  selectedMuscle === muscle 
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                    : "bg-[#0F0F12] border-[#1F1F21] text-gray-500 hover:text-white"
                )}
              >
                {muscle}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((ex) => (
            <motion.div
              layout
              key={ex.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="glass-card rounded-[24px] overflow-hidden flex flex-col md:flex-row group hover:border-indigo-500/30"
            >
              <div className="w-full md:w-40 bg-[#1A1A1E] aspect-video md:aspect-square flex items-center justify-center border-b md:border-b-0 md:border-r border-[#1F1F21] relative overflow-hidden">
                <span className="text-5xl font-black text-white/5 uppercase select-none">{ex.muscle.charAt(0)}</span>
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 flex-grow space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.2em] mb-1 block">{ex.muscle}</span>
                    <h3 className="text-xl font-bold tracking-tight">{ex.name}</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-xl bg-[#1A1A1E] border border-[#2A2A2E] hover:bg-[#2A2A2E] transition-colors">
                      <Info className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors">
                      <Play className="w-4 h-4 text-indigo-400 fill-indigo-400 shadow-indigo-400" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 md:line-clamp-3">{ex.instructions}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-10 h-10 text-gray-600" />
          </div>
          <p className="text-gray-500 font-medium tracking-tight">Nenhum exercício encontrado para "{search}"</p>
        </div>
      )}
    </div>
  );
}
