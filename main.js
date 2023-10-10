//Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
// You decide what the user should wear based on the temperature.
// An example is:
function recomendedCloths(temperature) {
    if (temperature >= 30) {
        return "a tank top and shorts"
    } else if (temperature >= 20) {
        return "a t-shirt and shorts"
    } else if (temperature >= 10) {
        return "pants and a shirt"
    } else if (temperature >= 0) {
        return "trousers and a sweater"
    } else {
        return "ski pants and jacket and gloves"
    }
}

const clothsToWear = console.log(recomendedCloths(18));