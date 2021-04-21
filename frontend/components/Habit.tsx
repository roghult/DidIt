import React from 'react';
import styled from 'styled-components/native';

export interface HabitProps {
  id: number;
  name: string;
}

const HabitView = styled.View`
  width: 50%;
  height: 80px;
  border: white;
  padding: 10px;
  justify-content: center;
`;

const HabitText = styled.Text`
  text-align: center;
  color: white;
`;

export default function Habit({ habit }: { habit: HabitProps }) {
  return (
    <HabitView>
      <HabitText>{habit.name}</HabitText>
    </HabitView>
  );
}
