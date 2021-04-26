export default function getWeek(d1, d2) {
  // returns an array of Date objects

  let oneDay = 24 * 3600 * 1000;
  let dates = [];
  let ms = d1 * 1;
  let last = d2 * 1;

  for (dates, ms, last; ms < last; ms += oneDay) {
    dates.push(new Date(ms));
  }

  return dates;
}
