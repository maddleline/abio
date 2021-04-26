import * as React from 'react';

import ComingSoon from './src/screens/ComingSoonScreen';
import { NavigationContainer } from '@react-navigation/native';
import TimesheetScreen from './src/screens/TimesheetScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import getWeek from './src/utils/getWeek';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
  let followingWeek = lastSunday * 1 + 7 * 24 * 3600 * 1000;
  let dates = getWeek(lastSunday, followingWeek);
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  switch (routeName) {
    case 'SUN':
      return `Sunday, ${dates[0].getDate()} ${months[dates[0].getMonth()]}`;
    case 'MON':
      return `Monday, ${dates[1].getDate()} ${months[dates[1].getMonth()]}`;
    case 'TUE':
      return `Tuesday, ${dates[2].getDate()} ${months[dates[2].getMonth()]}`;
    case 'WED':
      return `Wednesday, ${dates[3].getDate()} ${months[dates[3].getMonth()]}`;
    case 'THU':
      return `Thursday, ${dates[4].getDate()} ${months[dates[4].getMonth()]}`;
    case 'FRI':
      return `Friday, ${dates[5].getDate()} ${months[dates[5].getMonth()]}`;
    case 'SAT':
      return `Saturday, ${dates[6].getDate()} ${months[dates[6].getMonth()]}`;
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
