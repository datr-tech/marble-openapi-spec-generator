import { parser } from '@app-mosg/parser';

describe('parser', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 1;
      const numChildComponentsFound = Object.keys(parser).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
