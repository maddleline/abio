import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import Day from '../components/Day';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import data from '../data/jobs.json';
import getWeek from '../utils/getWeek';

const Tab = createMaterialTopTabNavigator();

const TimesheetScreen = () => {
  const [visible, setVisible] = useState(false);
  const [monday, setMonday] = useState([]);

  const renderItem = ({ item }) => {
    const onPressFunction = () => {
      setMonday([...monday, item]);
      setVisible(false);
    };

    return (
      <Pressable onPress={onPressFunction}>
        <View style={styles.item}>
          <Text style={styles.title}>
            {item.supervisor_job_supervisor} - {item.job_description}
          </Text>
        </View>
      </Pressable>
    );
  };

  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
  let followingWeek = lastSunday * 1 + 7 * 24 * 3600 * 1000;
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let dates = getWeek(lastSunday, followingWeek);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'lightgray',
          labelStyle: { fontSize: 12 }
        }}
      >
        {dates.map((day, index) => (
          <Tab.Screen name={weekdays[day.getDay()]} key={index}>
            {() => <Day name={day} jobs={[]} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>

      <AntDesign
        style={styles.icon}
        name="pluscircle"
        size={64}
        color="green"
        onPress={() => setVisible(true)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          // closeButtonFunction()
        }}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => {
            setVisible(false);
          }}
        >
          <View
            style={{
              height: '50%',
              marginTop: 'auto',
              backgroundColor: 'white'
            }}
          >
            <TouchableWithoutFeedback>
              <View style={styles.container}>
                <Text style={styles.modalHeaderText}>Job assignments</Text>
                <FlatList
                  data={data.AbioMobileData_row}
                  renderItem={renderItem}
                  // need a better key
                  keyExtractor={item =>
                    `${item.supervisor_job_job}-${item.supervisor_job_supervisor}`
                  }
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

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
    padding: 20,
    fontSize: 24
  },
  item: {
    borderColor: 'gray',
    borderBottomWidth: 0.25,
    padding: 20
  }
});

export default TimesheetScreen;
