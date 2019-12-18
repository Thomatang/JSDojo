import parse from '../src/deadFish';

describe('DeadFish Kata', function (){
    it('should return an array containing 1 when input is io', () => {
        const input = "io";
        const expected = [1];
        expect(parse(input)).toEqual(expect.arrayContaining(expected))
    })

    it('should return an array containing 8 and 64 when input is iiisdoso', () => {
        const input = "iiisdoso";
        const expected = [ 8, 64 ];
        expect(parse(input)).toEqual(expect.arrayContaining(expected))
    })

    it('should return an array containing 8 and 64 when input is iiisxxxdoso', () => {
        const input = "iiisxxxdoso";
        const expected = [ 8, 64 ];
        expect(parse(input)).toEqual(expect.arrayContaining(expected))
    })
})