import axios from 'axios';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components/native';
import { Text } from './Themed';

export interface HabitProps {
  id: number;
  name: string;
}

const backendUrl = 'http://0.0.0.0:8080/habits';

const HabitView = styled.View`
  width: 50%;
  height: 80px;
  border: white;
  padding: 10px;
  justify-content: center;
`;

const AddHabitTextInput = styled.TextInput``;

const AddHabitButton = styled.Button``;

export default function Habit() {
  const queryClient = useQueryClient();
  const mutation = useMutation((newHabit) => axios.post(backendUrl, newHabit), {
    onSuccess: () => queryClient.invalidateQueries('habits'),
  });
  return (
    <HabitView>
      {mutation.isLoading ? (
        <Text>'Adding habit...'</Text>
      ) : (
        <>
          {mutation.isError ? (
            <Text>An error occurred: {mutation.error.message}</Text>
          ) : null}

          <AddHabitTextInput
            placeholder='New habit...'
            onSubmitEditing={(event) => {
              mutation.mutate({ id: 5, name: event.nativeEvent.text });
            }}
          />
        </>
      )}
    </HabitView>
  );
}
