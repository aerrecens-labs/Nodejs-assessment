const WEEKDAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export function weekday(date) {
  return WEEKDAYS[date.getDay()];
}

export function isWeekday(date) {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

export function startOfDay(date) {
  const copy = new Date(date.getTime());
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function addDays(date, days) {
  const copy = new Date(date.getTime());
  copy.setDate(copy.getDate() + days);
  return copy;
}

export function businessDaysBetween(start, end) {
  let count = 0;
  let cursor = startOfDay(start);
  const last = startOfDay(end);
  while (cursor < last) {
    if (isWeekday(cursor)) {
      count += 1;
    }
    cursor = addDays(cursor, 1);
  }
  return count;
}

export function dueLabel(from, due) {
  const days = businessDaysBetween(from, due);
  if (due < from) {
    return 'overdue';
  }
  if (days === 0) {
    return 'today';
  }
  if (days === 1) {
    return 'tomorrow';
  }
  return `${days} business days`;
}
