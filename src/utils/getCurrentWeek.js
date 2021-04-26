import getWeek from './getWeek';

export default function getCurrentWeek() {
  let now = new Date();
  let today = new Date(now.toLocaleDateString());
  let lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
  let followingWeek = lastSunday * 1 + 7 * 24 * 3600 * 1000;
  return getWeek(lastSunday, followingWeek);
}
