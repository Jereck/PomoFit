import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}> Settings </Text>
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

export default SettingsScreen;