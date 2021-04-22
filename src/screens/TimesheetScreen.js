import { Text, View } from 'react-native';

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Monday() {
  return (
    <View><Text>Monday</Text></View>
  );
}

function Tuesday() {
  return (
    <View><Text>Tuesday</Text></View>
  );
}

function Wednesday() {
  return (
    <View><Text>Wednesday</Text></View>
  );
}

function Thursday() {
  return (
    <View><Text>Thursday</Text></View>
  );
}

function Friday() {
  return (
    <View><Text>Friday</Text></View>
  );
}

const TimesheetScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Monday" component={Monday} />
      <Tab.Screen name="Tuesday" component={Tuesday} />
      <Tab.Screen name="Wednesday" component={Wednesday} />
      <Tab.Screen name="Thursday" component={Thursday} />
      <Tab.Screen name="Friday" component={Friday} />
    </Tab.Navigator>
  );
}

export default TimesheetScreen;