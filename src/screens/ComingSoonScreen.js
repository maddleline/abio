import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36
  },
  title: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30
  }
});
