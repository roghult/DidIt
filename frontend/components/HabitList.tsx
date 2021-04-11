import React from 'react';

import Habit from './Habit';

export default function HabitList() {
  const habits = [
    {
      id: 1,
      name: 'Habit 1',
    },
    {
      id: 2,
      name: 'Habit 2',
    },
    {
      id: 3,
      name: 'Habit 3',
    },
  ];
  return (
    <>
      {habits.map((habit) => {
        return <Habit key={habit.id} habit={habit} />;
      })}
    </>
  );
}
