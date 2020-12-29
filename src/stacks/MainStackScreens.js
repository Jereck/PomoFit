import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const screenOptions = (({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName = "home";

      switch(route.name) {
        case "Home":
          iconName="home";
          break;
        case "Settings":
          iconName="gear";
          break;
        case "Profile":
          iconName="user";
          break;
        default:
          iconName="home";
      }

      return <FontAwesome name={iconName} size={24} color={ focused ? "#555" : "#666" } />
    },
  }))

  return(
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="Settings" component={SettingsScreen} />
    </MainStack.Navigator>
  )
}