import { getTimeSlots } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(
      getTimeSlots(new Date(1649476800000), new Date(1649484000000), 15)
    ).toEqual([
      new Date(1649476800000),
      new Date(1649477700000),
      new Date(1649478600000),
      new Date(1649479500000),
      new Date(1649480400000),
      new Date(1649481300000),
      new Date(1649482200000),
      new Date(1649483100000),
    ]);
  });
});
