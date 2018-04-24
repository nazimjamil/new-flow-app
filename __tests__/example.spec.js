// @flow

describe('this is a test spec', () => {
  const element = document.createElement('div');

  it('should assert true === true', () => {
    expect(true).toEqual(true);
  });

  it('should not be null', () => {
    expect(element).not.toBeNull();
  });
});
