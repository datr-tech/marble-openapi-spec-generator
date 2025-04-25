import { generator } from '@app-mosg/generator';

describe('generator', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 4;
      const numChildComponentsFound = Object.keys(generator).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
