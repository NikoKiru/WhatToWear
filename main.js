//Create a function (that you have to name) that has temperature as parameter.
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

let temperatureOutside = prompt("How many degrees celcius is it outside?")

 console.log(recomendedCloths(temperatureOutside));

