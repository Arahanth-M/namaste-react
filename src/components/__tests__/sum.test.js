import { sum } from '../sum';

test('sum function should calculate sum of 2 numbers', () => {
  const result = sum(4, 3);
  //Assertion
  expect(result).toBe(7);
});
