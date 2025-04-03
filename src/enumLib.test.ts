import { expect, test } from '@jest/globals';
import { findFirstKey, getMaxValue } from './enumLib';

enum TestEnum {
  A,
  B = 1,
  C = 0
};

let maxValue: number;

test('get max value of enum', () => {
  expect(maxValue = getMaxValue(TestEnum)).toBe(1);
});

test('get first key', () => {
  expect(findFirstKey(TestEnum, 0)).toBe("A");
});