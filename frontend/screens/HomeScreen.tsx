import * as React from 'react';
import { StyleSheet } from 'react-native';

import HabitList from '../components/HabitList';
import { View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HabitList></HabitList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
