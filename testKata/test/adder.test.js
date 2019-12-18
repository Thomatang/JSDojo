import add from '../src/adder';

describe('adder tests', function () {
    it('should return the sum of two numbers', () => {
        expect(add(1,1)).toBe(2);
    })
})