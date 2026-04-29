/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Exercise {
  id: string;
  name: string;
  muscle: string;
  instructions: string;
  image?: string;
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: Exercise[];
  duration: number; // in minutes
  difficulty: number; // 1-5
}

export interface UserStats {
  weight: number;
  height: number;
  streak: number;
  totalWorkouts: number;
  activityHistory: { date: string; calories: number }[];
}
