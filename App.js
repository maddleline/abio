import * as React from 'react';

import ComingSoon from './src/screens/ComingSoonScreen';
import { NavigationContainer } from '@react-navigation/native';
import TimesheetScreen from './src/screens/TimesheetScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  switch (routeName) {
    case 'SUN':
      return 'Sunday';
    case 'MON':
      return 'Monday';
    case 'TUE':
      return 'Tuesday';
    case 'WED':
      return 'Wednesday';
    case 'THU':
      return 'Thursday';
    case 'FRI':
      return 'Friday';
    case 'SAT':
      return 'Saturday';
    default:
      return 'Time';
  }
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: true, swipeEnabled: false }}
      >
        <Drawer.Screen
          name="Time"
          component={TimesheetScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route)
          })}
        />
        <Drawer.Screen name="Expenses" component={ComingSoon} />
        <Drawer.Screen name="Reports" component={ComingSoon} />
        <Drawer.Screen name="Settings" component={ComingSoon} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
