export default function convertWeekday(day) {
  // converts integer to string
  // or string to integer
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  if (typeof day === 'string') {
    return weekdays.indexOf(day);
  }

  if (typeof day === 'number') {
    return weekdays[day];
  }
}
