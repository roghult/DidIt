import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';

import Habit from './Habit';
import { Text, View } from './Themed';

const HabitsView = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const backendUrl = 'http://0.0.0.0:8080/habits';

const getHabits = () => {
  return axios.get(backendUrl);
};

export default function HabitList() {
  const { isLoading, isError, data, error } = useQuery('habits', getHabits);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error!</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const habits = data.data.habits;
  return (
    <HabitsView>
      {habits.map((habit) => {
        return <Habit key={habit.id} habit={habit} />;
      })}
    </HabitsView>
  );
}
