function convertToCelsius(fahrenheit) {
    return fahrenheit - 32;
}
function createMessage(fahrenheit, celsius,) {
    let message = " ";
    const numFahrenheit = fahrenheit * 5/9;

    if(fahrenheit >= 90 && fahrenheit <=100) {
        message = "Thats really hot! Drink water and use sunscreen";
    } else if(fahrenheit >= 80 && fahrenheit <= 89) {
        message = "Lets go to the beach!";
    } else if(fahrenheit >= 70 && fahrenheit <= 79) {
        message = "The perfect weather!";
    } else if(fahrenheit >= 60 && fahrenheit <= 69) {
        message = "Take a light jacket with you, its going to get a bit breezy!";
    } else if(fahrenheit >= 50 && fahrenheit <= 59) {
        message = "Its really cold, heavy coat is a must!";
    }
    return `${fahrenheit} fahrenheit is ${celsius} celsius. ${message}`;
    }
    
    function rand(max){
        return Math.round(Math.random() * max);

}

let inputFahrenheit = prompt('Enter a temperature using fahrenheit, we will convert that number to celsius');
let convertedCelsius = convertToCelsius(inputFahrenheit);
let output = createMessage(inputFahrenheit, convertedCelsius);
console.log(output);

inputFahrenheit = prompt('Lets try again! enter a temperature, we will convert that number from fahrenheit to celsius');
convertedCelsius = convertToCelsius(inputFahrenheit);
output = createMessage(inputFahrenheit, convertedCelsius);
console.log(output);

let randomFahrenheit = rand(100);
convertedCelsius = convertToCelsius(randomFahrenheit);
output = createMessage(randomFahrenheit, convertedCelsius);
console.log(output);

randomFahrenheit = rand(100);
convertedCelsius = convertToCelsius(randomFahrenheit);
output = createMessage(randomFahrenheit, convertedCelsius);
console.log(output)