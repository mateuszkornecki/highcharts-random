const random = require('./index');

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

 describe('data()', () => {
    const randomData = random.data();

   test('should return an array', () => {
      const isArray = Array.isArray(randomData);
      expect(isArray).toBe(true);
   });

   test('returned array length should be equal 10 ', () => {
      expect(randomData.length).toBe(10);
   });
 
 });

 describe('color()', () => {
   const randomColor = random.color();

  test('should return a string', () => {
   expect(typeof randomColor).toBe('string');;
  });

  test.todo('should return a correct rgb format')

});