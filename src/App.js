import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes';
import {LogBox, StatusBar} from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#16A858" barStyle="light-content" />
      <Router />
    </NavigationContainer>
  );
}
