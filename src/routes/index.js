import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Home, Login, Tambah, Daftar, Monitor} from '../pages';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tambah"
        component={Tambah}
        options={{
          headerTitle: 'Tambah Tanaman',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{
          headerTitle: 'Daftar Tanaman',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />
      <Stack.Screen
        name="Monitor"
        component={Monitor}
        options={{
          headerTitle: 'Monitoring Tanaman',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />
    </Stack.Navigator>
  );
}
