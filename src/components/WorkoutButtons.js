import React, { useState } from 'react'
import styled from 'styled-components';
import Text from './Text';

const WorkoutButtons = () => {

  return (
    <Container>
      <WorkoutButton>
        <Text medium>Push Ups</Text>
      </WorkoutButton>

      <WorkoutButton>
        <Text medium>Sit Ups</Text>
      </WorkoutButton>

      <WorkoutButton>
        <Text medium>Squats</Text>
      </WorkoutButton>
    </Container>
  )
}

const Container = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

const WorkoutButton = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 5px;
  background-color: white;
  border-radius: 5px;
`;

export default WorkoutButtons