import React from 'react';

import { Text } from './Themed';

export interface HabitProps {
  id: number;
  name: string;
}

export default function Habit({ habit }: { habit: HabitProps }) {
  return <Text>{habit.name}</Text>;
}
