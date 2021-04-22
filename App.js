import TimesheetScreen from './src/screens/TimesheetScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator({
  Timesheet: TimesheetScreen
}, {
  initialRouteName: 'Timesheet',
  defaultNavigationOptions: { title: 'Time'}
})

export default createAppContainer(navigator);
