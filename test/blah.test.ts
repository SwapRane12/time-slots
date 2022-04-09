import { getTimeSlots } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(getTimeSlots(new Date(649476800), new Date(1649480400), 15)).toEqual(
      [
        {
          startTime: new Date(649476800),
          endTime: new Date(1649477700),
        },
        {
          startTime: new Date(1649477760),
          endTime: new Date(1649478600),
        },
        {
          startTime: new Date(1649478660),
          endTime: new Date(1649479500),
        },
        {
          startTime: new Date(1649479560),
          endTime: new Date(1649480400),
        },
      ]
    );
  });
});
