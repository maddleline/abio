import * as React from 'react';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import TimesheetScreen from './src/screens/TimesheetScreen';
import { createStackNavigator } from '@react-navigation/stack';

function Profile() {
  return (
    <View><Text>Profile</Text></View>
  );
}
function Settings() {
  return (
    <View><Text>Settings</Text></View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Time" component={TimesheetScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}