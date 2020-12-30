import React from 'react'
import { StyleSheet, View } from 'react-native'

import Timer from '../components/Timer';
import WorkoutButtons from '../components/WorkoutButtons';
import Text from '../components/Text';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text title>PomoFit</Text>
      <Timer />
      <WorkoutButtons />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen;