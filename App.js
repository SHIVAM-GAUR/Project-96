import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import BMICalculation from './screens/B-M-I_calculation';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';

import { createBottomtabNavigator } from "react-navigation-tabs";


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{
    screen : WelcomeScreen
  },
  BottomTab :{
    screen : AppTabNavigator
  }
})


const AppContainer = createAppContainer(switchNavigator);