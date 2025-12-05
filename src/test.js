const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});
test("One dollar should be 146.26 Japan Yen", function() {
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.916)
});
test("One Japan Yen should be 0.005 Pound", function() {
    expect(fromYenToPound(4)).toBeCloseTo(0.022); 
});
