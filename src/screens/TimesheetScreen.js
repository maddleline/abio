import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import data from '../data/jobs.json';

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

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.supervisor_job_supervisor} - {item.job_description}</Text>
    </View>
  );
  
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
          // closeButtonFunction()
        }}>
          <TouchableOpacity 
            style={styles.container} 
            activeOpacity={1} 
            onPressOut={() => {setVisible(false)}}
          >
            <View
              style={{
                height: '50%',
                marginTop: 'auto',
                backgroundColor: 'white'
              }}>
                <TouchableWithoutFeedback>
                  <View style={styles.container}>
                    <Text style={styles.modalHeaderText}>Job assignments</Text>
                    <FlatList
                      data={data.AbioMobileData_row}
                      renderItem={renderItem}
                      // need a better key
                      keyExtractor={item => `${item.supervisor_job_job}-${item.supervisor_job_supervisor}`}
                    />
                  </View>
                </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    position: 'absolute',
    bottom: 24,
    right: 24
  },
  modalHeaderText: {
    padding: 24,
    fontSize: 32
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default TimesheetScreen;