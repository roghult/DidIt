import React from 'react';

import { Text } from './Themed';

export interface HabitProps {
  id: number;
  name: string;
}

// export default function Undertaking(props: { undertaking: { name: string } }) {
export default function Habit({ habit }: { habit: HabitProps }) {
  // const { undertaking } = props;
  return <Text>{habit.name}</Text>;
}
