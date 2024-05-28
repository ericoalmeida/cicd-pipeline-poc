const { sum, sub, mult } = require("./math.js")

describe("Test math component", () => {
    it("sum 3 + 3 equals 6", () => {
        const valueOne = 3
        const valueTwo = 3
    
        const expectedResult = 6;
        const result  = sum(valueOne, valueTwo);
    
        expect(result).toBe(expectedResult);        
    })

    it("sub 3 - 3 equals 0", () => {
        const valueOne = 3
        const valueTwo = 3
    
        const expectedResult = 0;
        const result  = sub(valueOne, valueTwo);
    
        expect(result).toBe(expectedResult);        
    })

    it("mult 3 * 3 equals 9", () => {
        const valueOne = 3
        const valueTwo = 3
    
        const expectedResult = 9;
        const result  = mult(valueOne, valueTwo);
    
        expect(result).toBe(expectedResult);        
    })
})