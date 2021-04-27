import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemeContextConsumer } from '../contexts/themeContext';

const Day = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.actual_date}</Text>
    </View>
  );

  function isToday({ actual_date }) {
    let actualDate = new Date(actual_date.split(' ').join('T'));

    // if date is current tab
    if (actualDate.getDay() === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <ThemeContextConsumer>
      {context => (
        <View style={styles.container}>
          {context.jobs.filter(isToday).length ? (
            <FlatList
              data={context.jobs}
              renderItem={renderItem}
              // need a better key
              keyExtractor={item =>
                `${item.supervisor_job_job}-${item.supervisor_job_supervisor}`
              }
            />
          ) : (
            <Text style={styles.placeholderText}>
              Select a job to start tracking time
            </Text>
          )}
        </View>
      )}
    </ThemeContextConsumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  placeholderText: {
    textAlign: 'center',
    padding: 32,
    color: 'gray'
  },
  item: {
    borderColor: 'gray',
    borderBottomWidth: 0.25,
    padding: 20
  }
});

Day.contextType = ThemeContextConsumer;

export default Day;
