import { sum } from '../src/math';

describe('test sum function', () => {
  it('should add 1 and 2 to be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
