import * as React from 'react';

import ComingSoon from './src/screens/ComingSoonScreen';
import { NavigationContainer } from '@react-navigation/native';
import TimesheetScreen from './src/screens/TimesheetScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: true, swipeEnabled: false }}
      >
        <Drawer.Screen name="Time" component={TimesheetScreen} />
        <Drawer.Screen name="Expenses" component={ComingSoon} />
        <Drawer.Screen name="Reports" component={ComingSoon} />
        <Drawer.Screen name="Settings" component={ComingSoon} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
