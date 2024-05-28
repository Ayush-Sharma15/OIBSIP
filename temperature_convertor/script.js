// script.js
function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultElement = document.getElementById('result');
    let result;

    // Clear previous error styles
    document.getElementById('inputValue').classList.remove('error');
    resultElement.classList.remove('error');

    if (isNaN(inputValue)) {
        resultElement.innerText = "Please enter a valid number";
        resultElement.classList.add('error');
        document.getElementById('inputValue').classList.add('error');
        return;
    }

    if (inputUnit === outputUnit) {
        result = inputValue;
    } else {
        // Convert input to Celsius first
        let tempInCelsius;
        if (inputUnit === 'C') {
            tempInCelsius = inputValue;
        } else if (inputUnit === 'F') {
            tempInCelsius = (inputValue - 32) * 5 / 9;
        } else if (inputUnit === 'K') {
            tempInCelsius = inputValue - 273.15;
        }

        // Convert from Celsius to the output unit
        if (outputUnit === 'C') {
            result = tempInCelsius;
        } else if (outputUnit === 'F') {
            result = (tempInCelsius * 9 / 5) + 32;
        } else if (outputUnit === 'K') {
            result = tempInCelsius + 273.15;
        }
    }

    resultElement.innerText = `Result: ${result.toFixed(2)} °${outputUnit}`;
}
