/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { WORKOUTS } from '../constants';
import { Clock, Zap, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function WorkoutList() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Treinos</h1>
          <p className="text-gray-400">Escolha sua rotina para hoje</p>
        </div>
        <button className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
          Create New +
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORKOUTS.map((workout) => (
          <motion.div 
            key={workout.id}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden glass-card rounded-[32px] p-8"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Zap className="w-32 h-32 text-indigo-500" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em]",
                  workout.level === 'Beginner' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                  workout.level === 'Intermediate' ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
                  "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                )}>
                  {workout.level}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <Clock className="w-3 h-3" />
                  {workout.duration} min
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">{workout.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{workout.description}</p>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{workout.exercises.length} Exercises Included</p>
                <div className="flex -space-x-2">
                  {workout.exercises.map((ex, i) => (
                    <div key={ex.id} className="w-9 h-9 rounded-full bg-[#1A1A1E] border-2 border-[#0F0F12] flex items-center justify-center text-[10px] font-black group-hover:border-indigo-500/30 transition-colors">
                      {ex.name.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/5">
                Start Training
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
