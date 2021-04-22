import { StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Day({name}) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const TimesheetScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'lightgray',
          labelStyle: { fontSize: 12 }
        }} 
      >
        <Tab.Screen name="SAT">{()=><Day name="Saturday" />}</Tab.Screen>
        <Tab.Screen name="SUN">{()=><Day name="Sunday" />}</Tab.Screen>
        <Tab.Screen name="MON">{()=><Day name="Monday" />}</Tab.Screen>
        <Tab.Screen name="TUE">{()=><Day name="Tuesday" />}</Tab.Screen>
        <Tab.Screen name="WED">{()=><Day name="Wednesday" />}</Tab.Screen>
        <Tab.Screen name="THU">{()=><Day name="Thursday" />}</Tab.Screen>
        <Tab.Screen name="FRI">{()=><Day name="Friday" />}</Tab.Screen>
      </Tab.Navigator>
      <AntDesign style={styles.icon} name="pluscircle" size={64} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  icon: {
    position: 'absolute',
    bottom: 128,
    right: 24
  }
});

export default TimesheetScreen;