export function getWeekdays(dates: string[]): string[] {
  return dates.map(date => {
    const currentDate = new Date(date);
    return currentDate.toLocaleString('default', { weekday: 'long' });
  });
}
