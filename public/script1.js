const vehicles = [
    { name: 'Maruti Suzuki Alto', topSpeed: 140, fuelEfficiency: 22.05, fuelCapacity: 35, maxRange: 771.75 },
    { name: 'Hyundai i20', topSpeed: 180, fuelEfficiency: 20.35, fuelCapacity: 37, maxRange: 753.05 },
    { name: 'Tata Nexon', topSpeed: 180, fuelEfficiency: 17.57, fuelCapacity: 44, maxRange: 772.68 },
    { name: 'Honda City', topSpeed: 180, fuelEfficiency: 17.8, fuelCapacity: 40, maxRange: 712.00 },
    { name: 'Mahindra Thar', topSpeed: 155, fuelEfficiency: 15.2, fuelCapacity: 57, maxRange: 866.40 },
    { name: 'Toyota Innova Crysta', topSpeed: 179, fuelEfficiency: 11.25, fuelCapacity: 55, maxRange: 618.75 },
    { name: 'Kia Seltos', topSpeed: 170, fuelEfficiency: 16.8, fuelCapacity: 50, maxRange: 840.00 },
    { name: 'Renault Kwid', topSpeed: 150, fuelEfficiency: 22.3, fuelCapacity: 28, maxRange: 624.40 },
    { name: 'Ford EcoSport', topSpeed: 182, fuelEfficiency: 15.9, fuelCapacity: 52, maxRange: 826.80 },
    { name: 'Tata Tiago', topSpeed: 150, fuelEfficiency: 23.84, fuelCapacity: 35, maxRange: 834.40 },
];

function createVehicleOptions() {
    const container1 = document.getElementById('vehicle-options1');
    const container2 = document.getElementById('vehicle-options2');
    if (!container1 || !container2) {
        console.error('Vehicle options containers not found');
        return;
    }

    vehicles.forEach((vehicle, index) => {
        const label1 = document.createElement('label');
        label1.className = 'vehicle-option';
        const radio1 = document.createElement('input');
        radio1.type = 'radio';
        radio1.name = 'vehicle1';
        radio1.value = index;
        if (index === 0) radio1.checked = true;
        label1.appendChild(radio1);
        label1.appendChild(document.createTextNode(vehicle.name));
        container1.appendChild(label1);

        const label2 = document.createElement('label');
        label2.className = 'vehicle-option';
        const radio2 = document.createElement('input');
        radio2.type = 'radio';
        radio2.name = 'vehicle2';
        radio2.value = index;
        if (index === 1) radio2.checked = true;
        label2.appendChild(radio2);
        label2.appendChild(document.createTextNode(vehicle.name));
        container2.appendChild(label2);
    });
    console.log('Vehicle options created');
}

function calculateDistanceAndFuel(time, vehicle) {
    const totalTimeInHours = time.hours + (time.minutes / 60); 
    const distance = totalTimeInHours * (vehicle.topSpeed * 0.9); 
    const fuelNeeded = distance / vehicle.fuelEfficiency;
    const inRange = distance <= vehicle.maxRange;
    return { distance, fuelNeeded, inRange };
}

document.getElementById('calculate-distance').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const validationMessage = document.getElementById('validation-message');
    validationMessage.innerHTML = '';
    
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0 || minutes >= 60) {
        validationMessage.innerHTML = 'Please enter valid time values';
        return;
    }
    
    const time = { hours, minutes };
    const vehicleIndex = parseInt(document.querySelector('input[name="vehicle1"]:checked').value);
    const vehicle = vehicles[vehicleIndex];
    const result = calculateDistanceAndFuel(time, vehicle);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Vehicle: ${vehicle.name}</p>
        <p>Distance traveled in ${time.hours} hours ${time.minutes} minutes: ${result.distance.toFixed(2)} km</p>
        <p>Fuel needed: ${result.fuelNeeded.toFixed(2)} liters</p>
        <p>${result.inRange ? 'Within range' : 'Out of range'}</p>
    `;
    console.log('Distance calculated');
});

document.getElementById('compare-vehicles').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const validationMessage = document.getElementById('validation-message');
    validationMessage.innerHTML = '';

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0 || minutes >= 60) {
        validationMessage.innerHTML = 'Please enter valid time values';
        return;
    }

    const time = { hours, minutes };
    const comparisonResultDiv = document.getElementById('comparison-result');
    comparisonResultDiv.innerHTML = '<h3>Comparison Results:</h3>';
    
    vehicles.forEach(vehicle => {
        const result = calculateDistanceAndFuel(time, vehicle);
        const vehicleResult = document.createElement('div');
        vehicleResult.innerHTML = `
            <p>Vehicle: ${vehicle.name}</p>
            <p>Distance traveled in ${time.hours} hours ${time.minutes} minutes: ${result.distance.toFixed(2)} km</p>
            <p>Fuel needed: ${result.fuelNeeded.toFixed(2)} liters</p>
            <p>${result.inRange ? 'Within range' : 'Out of range'}</p>
            <hr>
        `;
        comparisonResultDiv.appendChild(vehicleResult);
    });
    console.log('Comparison results displayed');
});

document.getElementById('compare-two-vehicles').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const validationMessage = document.getElementById('validation-message');
    validationMessage.innerHTML = '';

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0 || minutes >= 60) {
        validationMessage.innerHTML = 'Please enter valid time values';
        return;
    }

    const time = { hours, minutes };
    const vehicleIndex1 = parseInt(document.querySelector('input[name="vehicle1"]:checked').value);
    const vehicleIndex2 = parseInt(document.querySelector('input[name="vehicle2"]:checked').value);
    const vehicle1 = vehicles[vehicleIndex1];
    const vehicle2 = vehicles[vehicleIndex2];
    const result1 = calculateDistanceAndFuel(time, vehicle1);
    const result2 = calculateDistanceAndFuel(time, vehicle2);

    const comparisonResultDiv = document.getElementById('two-vehicle-comparison-result');
    comparisonResultDiv.innerHTML = '<h3>Two Vehicle Comparison Results:</h3>';
    const vehicleComparison = document.createElement('div');
    vehicleComparison.innerHTML = `
        <p>Vehicle 1: ${vehicle1.name}</p>
        <p>Distance traveled in ${time.hours} hours ${time.minutes} minutes: ${result1.distance.toFixed(2)} km</p>
        <p>Fuel needed: ${result1.fuelNeeded.toFixed(2)} liters</p>
        <p>${result1.inRange ? 'Within range' : 'Out of range'}</p>
        <hr>
        <p>Vehicle 2: ${vehicle2.name}</p>
        <p>Distance traveled in ${time.hours} hours ${time.minutes} minutes: ${result2.distance.toFixed(2)} km</p>
        <p>Fuel needed: ${result2.fuelNeeded.toFixed(2)} liters</p>
        <p>${result2.inRange ? 'Within range' : 'Out of range'}</p>
    `;
    comparisonResultDiv.appendChild(vehicleComparison);
    console.log('Two vehicle comparison results displayed');
});

document.addEventListener('DOMContentLoaded', (event) => {
    createVehicleOptions();
    console.log('Script loaded and DOM fully parsed');
});