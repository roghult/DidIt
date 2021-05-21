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

const HabitButton = styled.Button``;

const habitPressed = () => {};

export default function Habit({ habit }: { habit: HabitProps }) {
  return (
    <HabitView>
      <HabitButton title={habit.name} onPress={habitPressed} />
    </HabitView>
  );
}
