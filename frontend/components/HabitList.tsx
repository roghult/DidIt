import React from 'react';

import Habit from './Habit';
import { HABIT_LIST_MOCK } from '../mock/HabitMockData';

export default function HabitList() {
  return (
    <>
      {HABIT_LIST_MOCK.map((habit) => {
        return <Habit key={habit.id} habit={habit} />;
      })}
    </>
  );
}
