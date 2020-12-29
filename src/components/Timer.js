import React, { useState, useEffect } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

momentDurationFormatSetup(moment)

const Timer = () => {
  const [sessionType, setSessionType] = useState("Session");
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength] = useState(1 * 10);
  const timeLeft = moment.duration(sessionLength, 's').format('mm:ss', {trim: false})

  useEffect(() => {
    setSessionLength(sessionLength)
  }, [sessionLength]);

  const isStarted = intervalId != null;
  const handleStartStopClick = () => {
    if (isStarted){
      clearInterval(intervalId)
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setSessionLength(prevSessionLength => {
          const timeLeft = prevSessionLength - 1;
          if (timeLeft >= 0) {
            console.log(timeLeft);
            return prevSessionLength - 1;
          }
          setSessionType("Break")
          setSessionLength(1 * 15)
          return prevSessionLength
        })
      }, 1000)
      setIntervalId(newIntervalId);
    }
  }

  return (
    <View style={styles.timer}>
      <Text style={ styles.mode }>{sessionType}</Text>
      <Text style={{ fontSize: 90, color: 'white' }}>{ timeLeft }</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity 
          style={styles.startButton}
          onPress={handleStartStopClick}
        >
          <Text style={{ color: 'red', fontSize: 20 }}>
            { isStarted ? 'STOP' : 'START'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
  timer: {
    backgroundColor: '#e08c88',
    borderRadius: 10,
    paddingHorizontal: 45,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timerModes:{
    flexDirection: 'row',
  },
  mode: {
    margin: 5,
    backgroundColor: '#bf7774',
    fontSize: 24,
    color: 'white',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5
  },
  startButton: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
