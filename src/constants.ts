import { Exercise, Workout } from './types';

export const EXERCISES: Exercise[] = [
  {
    id: '1',
    name: 'Supino Reto',
    muscle: 'Peito',
    instructions: 'Deite-se no banco, segure a barra com as mãos um pouco mais largas que os ombros e desça até o peito.',
  },
  {
    id: '2',
    name: 'Agachamento Livre',
    muscle: 'Pernas',
    instructions: 'Mantenha os pés na largura dos ombros, desça o quadril como se fosse sentar em uma cadeira, mantendo as costas eretas.',
  },
  {
    id: '3',
    name: 'Puxada Pulley',
    muscle: 'Costas',
    instructions: 'Sente-se no aparelho, segure a barra e puxe em direção ao peitoral superior, mantendo os cotovelos para baixo.',
  },
  {
    id: '4',
    name: 'Rosca Direta',
    muscle: 'Bíceps',
    instructions: 'Mantenha os braços ao lado do corpo, flexione os cotovelos trazendo o peso em direção aos ombros.',
  },
  {
    id: '5',
    name: 'Tríceps Corda',
    muscle: 'Tríceps',
    instructions: 'Segure a corda no pulley, estenda os braços completamente para baixo mantendo os cotovelos fixos.',
  }
];

export const WORKOUTS: Workout[] = [
  {
    id: 'w1',
    title: 'Full Body Explosive',
    description: 'Um treino completo para quem tem pouco tempo e quer intensidade máxima.',
    level: 'Intermediate',
    exercises: [EXERCISES[1], EXERCISES[0], EXERCISES[2]],
    duration: 45,
    difficulty: 4
  },
  {
    id: 'w2',
    title: 'Iniciante Adaptativo',
    description: 'Focado em técnica e adaptação neuromuscular.',
    level: 'Beginner',
    exercises: [EXERCISES[0], EXERCISES[4], EXERCISES[3]],
    duration: 60,
    difficulty: 2
  }
];
