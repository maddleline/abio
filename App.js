import * as React from 'react';

import ComingSoon from './src/screens/ComingSoonScreen';
import { NavigationContainer } from '@react-navigation/native';
import TimesheetScreen from './src/screens/TimesheetScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import getCurrentWeek from './src/utils/getCurrentWeek';
import convertWeekday from './src/utils/convertWeekday';
import getToday from './src/utils/getToday';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  let dates = getCurrentWeek();
  let today = getToday();

  let weekdayIndex = routeName ? convertWeekday(routeName) : today.getDay();
  return dates[weekdayIndex].toDateString();
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
