import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Day = (props) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.supervisor_job_supervisor} - {item.job_description}</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      {props.jobs.length
        ? <FlatList
            data={props.jobs}
            renderItem={renderItem}
            // need a better key
            keyExtractor={item => `${item.supervisor_job_job}-${item.supervisor_job_supervisor}`}
          />
        :<Text style={styles.placeholderText}>Select a job to start tracking time</Text>
      }
    </View>
  );
}

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

export default Day;