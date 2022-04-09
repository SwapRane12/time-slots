import { isBefore, addMinutes } from 'date-fns';

export const getTimeSlots = (
  startTime: Date,
  endTime: Date,
  interval: number
) => {
  const from = startTime;
  const to = endTime;
  console.log('from', from);
  console.log('to', to);

  const step = (x: Date): Date => addMinutes(x, interval);

  const blocks = [];

  let cursor = from;

  while (isBefore(cursor, to)) {
    blocks.push(cursor);
    cursor = step(cursor);
  }

  return blocks;
};
