const sum = require('.')

describe('index', () => {
  it('should add two numbers', () => {
    expect(sum(2, 2)).toEqual(4);
  })
})