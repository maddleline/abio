import getWeek from './getWeek';
import getToday from './getToday';

export default function getCurrentWeek() {
  let today = getToday();
  let lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
  let followingWeek = lastSunday * 1 + 7 * 24 * 3600 * 1000;
  return getWeek(lastSunday, followingWeek);
}
