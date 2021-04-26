import getWeek from './getWeek';
import getLocalTime from './getLocalTime';

export default function getCurrentWeek() {
  let today = getLocalTime();
  let lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
  let followingWeek = lastSunday * 1 + 7 * 24 * 3600 * 1000;
  return getWeek(lastSunday, followingWeek);
}
