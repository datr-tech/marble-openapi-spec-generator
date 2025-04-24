import { combine } from '@app-mosg/combine';

describe('combine', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 1;
      const numChildComponentsFound = Object.keys(combine).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
