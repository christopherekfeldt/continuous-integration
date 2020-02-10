const characterCounter = require('./character-counter');

describe('countNonSlashCharacters()', function() {
  test('should return 4 when supplied "/page"', function() {
    const result = characterCounter.countNonSlashCharacters('/page');
    expect(result).toBe(5);
  })
})
