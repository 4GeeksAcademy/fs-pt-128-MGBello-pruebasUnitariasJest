let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (amount) => {
    let totalYen = (amount / oneEuroIs["USD"]) * oneEuroIs["JPY"]
    return totalYen
}
console.log(fromDollarToYen(1));

const fromEuroToDollar = (amount) => {
    let dollarToEuro = amount * oneEuroIs["USD"];
    return dollarToEuro
}
console.log(fromEuroToDollar(1));

const fromYenToPound = (amount) => {
    let yenToPound = (amount / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return yenToPound
}
console.log(fromYenToPound(4));

module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound };