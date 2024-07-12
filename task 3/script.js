document.getElementById('convertBtn').addEventListener('click', function () {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    const resultBox = document.getElementById('result');
    let convertedTemp = '';
    let convertedUnit = '';

    if (isNaN(temp)) {
        resultBox.textContent = 'Please enter a valid number.';
        return;
    }

    switch (unit) {
        case 'Celsius':
            convertedTemp = (temp * 9 / 5) + 32;
            convertedUnit = 'Fahrenheit';
            break;
        case 'Fahrenheit':
            convertedTemp = (temp - 32) * 5 / 9;
            convertedUnit = 'Celsius';
            break;
        case 'Kelvin':
            convertedTemp = temp - 273.15;
            convertedUnit = 'Celsius';
            break;
        default:
            resultBox.textContent = 'Invalid unit';
            return;
    }

    resultBox.textContent = `${temp} ${unit} is ${convertedTemp.toFixed(2)} ${convertedUnit}`;
});
