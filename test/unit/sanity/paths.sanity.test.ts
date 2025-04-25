import { paths } from '@app-mosg/paths';

describe('paths', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 2;
      const numChildComponentsFound = Object.keys(paths).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
