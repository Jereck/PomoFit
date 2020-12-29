import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserProvider } from './src/context/UserContext';
import { FirebaseProvider } from './src/context/FirebaseContext';

import AppStackScreens from './src/stacks/AppStackScreens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStackScreens />
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  );
}

export default App;