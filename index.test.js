const random = require('./index');

test('numberBetween()', () => {
   const numberBetween0and10 = random.numberBetween()

   expect(typeof numberBetween0and10).toBe('number');
   
 });

 describe('numberBetween()', () => {
   const numberBetween0and10 = random.numberBetween()

   test('should return a number', () => {
      expect(typeof numberBetween0and10).toBe('number');
   });
 
   test('should return a number between 0 and 10', () => {
      expect(numberBetween0and10).toBeGreaterThanOrEqual(0);
      expect(numberBetween0and10).toBeLessThanOrEqual(10);
   });
 });
