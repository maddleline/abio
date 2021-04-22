import { Text, View } from 'react-native';

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
function Saturday() {
  return (
    <View><Text>Saturday</Text></View>
  );
}

function Sunday() {
  return (
    <View><Text>Sunday</Text></View>
  );
}

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
    <View><Text>THU</Text></View>
  );
}

function Friday() {
  return (
    <View><Text>Friday</Text></View>
  );
}

const TimesheetScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'lightgray',
        labelStyle: { fontSize: 12 },
        tabStyle: {},
        style: {},
      }} 
    >
      <Tab.Screen name="SAT" component={Saturday} />
      <Tab.Screen name="SUN" component={Sunday} />
      <Tab.Screen name="MON" component={Monday} />
      <Tab.Screen name="TUE" component={Tuesday} />
      <Tab.Screen name="WED" component={Wednesday} />
      <Tab.Screen name="THU" component={Thursday} />
      <Tab.Screen name="FRI" component={Friday} />
    </Tab.Navigator>
  );
}

export default TimesheetScreen;