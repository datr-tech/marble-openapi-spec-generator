import * as config from '@app-mosg/config';

describe('config', () => {
  describe('sanity', () => {
    test('should contain the expected number of child component', () => {
      const numChildComponentsExpected = 3;
      const numChildComponentsFound = Object.keys(config).length;
      expect(numChildComponentsExpected).toEqual(numChildComponentsFound);
    });
  });
});
