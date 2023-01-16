import { describe, expect, it } from 'vitest';
import { getWeekdays } from './getWeekdays';

describe('getWeekdays', () => {
  it('should create Weekdays for each Date', () => {
    const dates = ['2023-01-01', '2023-10-31', '2023-12-26'];

    const expected = ['Sonntag', 'Dienstag', 'Dienstag'];

    expect(getWeekdays(dates)).toEqual(expected);
  });
});
