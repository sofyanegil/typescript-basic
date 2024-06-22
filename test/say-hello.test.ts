import { sayHello } from '../src/say-hello';

describe('sayHello function', () => {
  it('should return a string with the name', () => {
    expect(sayHello('World')).toBe('Hello World!');
  });
});
