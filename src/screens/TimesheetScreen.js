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
import getCurrentWeek from '../utils/getCurrentWeek';
import convertWeekday from '../utils/convertWeekday';
import getToday from '../utils/getToday';

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

  let dates = getCurrentWeek();
  let today = getToday();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'lightgray',
          labelStyle: { fontSize: 12 }
        }}
        initialRouteName={convertWeekday(today.getDay())}
      >
        {dates.map((day, index) => (
          <Tab.Screen name={convertWeekday(day.getDay())} key={index}>
            {/* Using a render callback for the screen instead of specifying
            a component prop to pass additional props to screen.
            It's recommended to use React context and wrap
            the navigator with a context provider to pass data to the screens. */}
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
