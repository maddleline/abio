export default function getLocalTime() {
  let timeUTC = new Date(); // UTC

  // convert to local timezone
  let timeLocal = new Date([
    timeUTC.toLocaleDateString(),
    timeUTC.toLocaleTimeString()
  ]);

  // return local time object
  return timeLocal;
}
