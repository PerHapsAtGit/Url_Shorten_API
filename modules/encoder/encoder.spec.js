const encoder = require('./encoder');

describe('encoder', () => {
    it('should encode number to a string and decode it', () => {
        const number = 1002;
        const string = encoder.encode(number);

        expect(typeof string).to.equal('string');
        expect(string).to.not.equal('1002');

        const decodedNum = encoder.decode(string);
        expect(decodedNum).to.equal(number);
    })
})