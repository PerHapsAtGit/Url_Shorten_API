const validator = require('./validator');

describe('validator', () => {
    it('should validate url correctly', () => {
        const invalid = 'invalid';
        const invalidResult = validator(invalid);
        expect(invalidResult).to.be.false;

        const valid = 'http://hello';
        const validResult = validator(valid);
        expect(validResult).to.be.true;
    })
})