import React from 'react';

import Habit from './Habit';
import { HABIT_LIST_MOCK } from '../mock/HabitMockData';
import styled from 'styled-components/native';

const HabitsView = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function HabitList() {
  return (
    <HabitsView>
      {HABIT_LIST_MOCK.map((habit) => {
        return <Habit key={habit.id} habit={habit} />;
      })}
    </HabitsView>
  );
}
