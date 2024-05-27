const { sum } = require("./math.js")

describe("Test math component", () => {
    it("sum 3 + 3 equals 6", () => {
        const valueOne = 3
        const valueTwo = 3
    
        const expectedResult = 6;
        const result  = sum(valueOne, valueTwo);
    
        expect(result).toBe(expectedResult);        
    })
})