import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'

import Timer from '../components/Timer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Timer />
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