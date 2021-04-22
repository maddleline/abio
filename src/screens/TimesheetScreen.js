import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons';
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
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  
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

      <AntDesign style={styles.icon} name="pluscircle" size={64} color="green" onPress={() => { setVisible(true); }} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}>
        <View
          style={{
            height: '50%',
            marginTop: 'auto',
            backgroundColor: 'white'
          }}>
          <View style={styles.footer}>
            <Text style={styles.modalHeaderText}>Job assignments</Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => toggleOverlay()}>
            <Text style={styles.addButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  },
  modalHeaderText: {
    fontSize: 32
  }
});

export default TimesheetScreen;