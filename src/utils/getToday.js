export default function getCurrentWeek() {
  let now = new Date();
  // convert to local timezone
  let today = new Date(now.toLocaleDateString());
  return today;
}
