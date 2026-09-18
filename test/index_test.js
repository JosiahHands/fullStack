const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const result = Rooster.announceDawn;
      assert.strictEqual(expected, result);
    }); 
  });
  describe('timeAtDawn', () => {
    it('returns its argrument as a string', () => {
      const expected = Rooster.timeAtDawn.toString();
      const result = Rooster.timeAtDawn;
      assert.strictEqual(expected, result);
    });
    it('throws an error if passed a number less than 0', () => {
      const result = Number(Rooster.timeAtDawn);
      assert.ok(result >= 0);
    });
    it('throws an error if passed a number greater than 23', () => {
      const result = Number(Rooster.timeAtDawn);
      assert.ok(result <= 23);
    });
  });
});