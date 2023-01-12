export function getWeekdays(dates: string[]): string[] {
  const weekdays: string[] = [];
  dates.forEach(date => {
    const currentDate = new Date(date);
    weekdays.push(currentDate.toLocaleString('default', { weekday: 'long' }));
  });
  return weekdays;
}
