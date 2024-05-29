// // const vehicles = [
// //     { name: 'Maruti Suzuki Alto', topSpeed: 140, fuelEfficiency: 22.05, fuelCapacity: 35, maxRange: 771.75 },
// //     { name: 'Hyundai i20', topSpeed: 180, fuelEfficiency: 20.35, fuelCapacity: 37, maxRange: 753.05 },
// //     { name: 'Tata Nexon', topSpeed: 180, fuelEfficiency: 17.57, fuelCapacity: 44, maxRange: 772.68 },
// //     { name: 'Honda City', topSpeed: 180, fuelEfficiency: 17.8, fuelCapacity: 40, maxRange: 712.00 },
// //     { name: 'Mahindra Thar', topSpeed: 155, fuelEfficiency: 15.2, fuelCapacity: 57, maxRange: 866.40 },
// //     { name: 'Toyota Innova Crysta', topSpeed: 179, fuelEfficiency: 11.25, fuelCapacity: 55, maxRange: 618.75 },
// //     { name: 'Kia Seltos', topSpeed: 170, fuelEfficiency: 16.8, fuelCapacity: 50, maxRange: 840.00 },
// //     { name: 'Renault Kwid', topSpeed: 150, fuelEfficiency: 22.3, fuelCapacity: 28, maxRange: 624.40 },
// //     { name: 'Ford EcoSport', topSpeed: 182, fuelEfficiency: 15.9, fuelCapacity: 52, maxRange: 826.80 },
// //     { name: 'Tata Tiago', topSpeed: 150, fuelEfficiency: 23.84, fuelCapacity: 35, maxRange: 834.40 },
// //   ];
  
// //   function createVehicleOptions() {
// //     const container = document.getElementById('vehicle-options');
// //     if (!container) {
// //       console.error('Vehicle options container not found');
// //       return;
// //     }
  
// //     vehicles.forEach((vehicle, index) => {
// //       const label = document.createElement('label');
// //       label.className = 'vehicle-option';
// //       const radio = document.createElement('input');
// //       radio.type = 'radio';
// //       radio.name = 'vehicle';
// //       radio.value = index;
// //       if (index === 0) radio.checked = true;
// //       label.appendChild(radio);
// //       label.appendChild(document.createTextNode(vehicle.name));
// //       container.appendChild(label);
// //     });
// //     console.log('Vehicle options created');
// //   }
  
// //   function calculateTimeAndFuel(distance, vehicle) {
// //     const time = distance / (vehicle.topSpeed * 0.9); // average speed at 90% of top speed
// //     const fuelNeeded = distance / vehicle.fuelEfficiency;
// //     const inRange = distance <= vehicle.maxRange;
// //     return { time, fuelNeeded, inRange };
// //   }
  
// //   document.getElementById('calculate-time').addEventListener('click', () => {
// //     const distance = parseFloat(document.getElementById('distance').value);
// //     if (isNaN(distance) || distance <= 0) {
// //       alert('Please enter a valid distance');
// //       return;
// //     }
// //     const vehicleIndex = parseInt(document.querySelector('input[name="vehicle"]:checked').value);
// //     const vehicle = vehicles[vehicleIndex];
// //     const result = calculateTimeAndFuel(distance, vehicle);
  
// //     const resultDiv = document.getElementById('result');
// //     resultDiv.innerHTML = `
// //       <p>Vehicle: ${vehicle.name}</p>
// //       <p>Time to travel ${distance} km: ${result.time.toFixed(2)} hours</p>
// //       <p>Fuel needed: ${result.fuelNeeded.toFixed(2)} liters</p>
// //       <p>${result.inRange ? 'Within range' : 'Out of range'}</p>
// //     `;
// //     console.log('Travel time calculated');
// //   });
  
// //   document.getElementById('compare-vehicles').addEventListener('click', () => {
// //     const distance = parseFloat(document.getElementById('distance').value);
// //     if (isNaN(distance) || distance <= 0) {
// //       alert('Please enter a valid distance');
// //       return;
// //     }
// //     const comparisonResultDiv = document.getElementById('comparison-result');
// //     comparisonResultDiv.innerHTML = '<h3>Comparison Results:</h3>';
  
// //     vehicles.forEach(vehicle => {
// //       const result = calculateTimeAndFuel(distance, vehicle);
// //       const vehicleResult = document.createElement('div');
// //       vehicleResult.innerHTML = `
// //         <p>Vehicle: ${vehicle.name}</p>
// //         <p>Time to travel ${distance} km: ${result.time.toFixed(2)} hours</p>
// //         <p>Fuel needed: ${result.fuelNeeded.toFixed(2)} liters</p>
// //         <p>${result.inRange ? 'Within range' : 'Out of range'}</p>
// //         <hr>
// //       `;
// //       comparisonResultDiv.appendChild(vehicleResult);
// //     });
// //     console.log('Comparison results displayed');
// //   });
  
// //   document.addEventListener('DOMContentLoaded', (event) => {
// //     createVehicleOptions();
// //     console.log('Script loaded and DOM fully parsed');
// //   });
  
// const vehicles = [
//   { name: 'Maruti Suzuki Alto', topSpeed: 140, fuelEfficiency: 22.05, fuelCapacity: 35, maxRange: 771.75 },
//   { name: 'Hyundai i20', topSpeed: 180, fuelEfficiency: 20.35, fuelCapacity: 37, maxRange: 753.05 },
//   { name: 'Tata Nexon', topSpeed: 180, fuelEfficiency: 17.57, fuelCapacity: 44, maxRange: 772.68 },
//   { name: 'Honda City', topSpeed: 180, fuelEfficiency: 17.8, fuelCapacity: 40, maxRange: 712.00 },
//   { name: 'Mahindra Thar', topSpeed: 155, fuelEfficiency: 15.2, fuelCapacity: 57, maxRange: 866.40 },
//   { name: 'Toyota Innova Crysta', topSpeed: 179, fuelEfficiency: 11.25, fuelCapacity: 55, maxRange: 618.75 },
//   { name: 'Kia Seltos', topSpeed: 170, fuelEfficiency: 16.8, fuelCapacity: 50, maxRange: 840.00 },
//   { name: 'Renault Kwid', topSpeed: 150, fuelEfficiency: 22.3, fuelCapacity: 28, maxRange: 624.40 },
//   { name: 'Ford EcoSport', topSpeed: 182, fuelEfficiency: 15.9, fuelCapacity: 52, maxRange: 826.80 },
//   { name: 'Tata Tiago', topSpeed: 150, fuelEfficiency: 23.84, fuelCapacity: 35, maxRange: 834.40 },
// ];

// function createVehicleOptions() {
//   const container = document.getElementById('vehicle-options');
//   if (!container) {
//       console.error('Vehicle options container not found');
//       return;
//   }

//   vehicles.forEach((vehicle, index) => {
//       const label = document.createElement('label');
//       label.className = 'vehicle-option';
//       const radio = document.createElement('input');
//       radio.type = 'radio';
//       radio.name = 'vehicle';
//       radio.value = index;
//       if (index === 0) radio.checked = true;
//       label.appendChild(radio);
//       label.appendChild(document.createTextNode(vehicle.name));
//       container.appendChild(label);
//   });
//   console.log('Vehicle options created');
// }

// function calculateTimeAndFuel(distance, vehicle) {
//   const time = distance / (vehicle.topSpeed * 0.9); // average speed at 90% of top speed
//   const fuelNeeded = distance / vehicle.fuelEfficiency;
//   const inRange = distance <= vehicle.maxRange;
//   return { time, fuelNeeded, inRange };
// }

// document.getElementById('calculate-time').addEventListener('click', () => {
//   const distance = parseFloat(document.getElementById('distance').value);
//   if (isNaN(distance) || distance <= 0) {
//       alert('Please enter a valid distance');
//       return;
//   }
//   const vehicleIndex = parseInt(document.querySelector('input[name="vehicle"]:checked').value);
//   const vehicle = vehicles[vehicleIndex];
//   const result = calculateTimeAndFuel(distance, vehicle);

//   const resultDiv = document.getElementById('result');
//   resultDiv.innerHTML = `
//       <p>Vehicle: ${vehicle.name}</p>
//       <p>Time to travel ${distance} km: ${result.time.toFixed(2)} hours</p>
//       <p>Fuel needed: ${result.fuelNeeded.toFixed(2)} liters</p>
//       <p>${result.inRange ? 'Within range' : 'Out of range'}</p>
//   `;
//   console.log('Travel time calculated');
// });

// function createComparisonSelect(id) {
//   const selectContainer = document.getElementById(id);
//   if (!selectContainer) {
//       console.error(`Select container ${id} not found`);
//       return;
//   }
  
//   const select = document.createElement('select');
//   select.className = 'vehicle-select';
//   vehicles.forEach((vehicle, index) => {
//       const option = document.createElement('option');
//       option.value = index;
//       option.text = vehicle.name;
//       select.appendChild(option);
//   });
//   selectContainer.appendChild(select);
// }

// document.getElementById('compare-two-vehicles').addEventListener('click', () => {
//   const distance = parseFloat(document.getElementById('distance').value);
//   if (isNaN(distance) || distance <= 0) {
//       alert('Please enter a valid distance');
//       return;
//   }
//   const vehicle1Index = parseInt(document.querySelector('#select-vehicle1 select').value);
//   const vehicle2Index = parseInt(document.querySelector('#select-vehicle2 select').value);
//   const vehicle1 = vehicles[vehicle1Index];
//   const vehicle2 = vehicles[vehicle2Index];

//   const result1 = calculateTimeAndFuel(distance, vehicle1);
//   const result2 = calculateTimeAndFuel(distance, vehicle2);

//   const comparisonResultDiv = document.getElementById('two-vehicle-comparison-result');
//   comparisonResultDiv.innerHTML = `
//       <div class="vehicle-comparison">
//           <p><strong>Vehicle:</strong> ${vehicle1.name}</p>
//           <p><strong>Time to travel ${distance} km:</strong> ${result1.time.toFixed(2)} hours</p>
//           <p><strong>Fuel needed:</strong> ${result1.fuelNeeded.toFixed(2)} liters</p>
//           <p><strong>Status:</strong> ${result1.inRange ? 'Within range' : 'Out of range'}</p>
//       </div>
//       <div class="vehicle-comparison">
//           <p><strong>Vehicle:</strong> ${vehicle2.name}</p>
//           <p><strong>Time to travel ${distance} km:</strong> ${result2.time.toFixed(2)} hours</p>
//           <p><strong>Fuel needed:</strong> ${result2.fuelNeeded.toFixed(2)} liters</p>
//           <p><strong>Status:</strong> ${result2.inRange ? 'Within range' : 'Out of range'}</p>
//       </div>
//   `;
//   console.log('Two vehicle comparison results displayed');
// });

// document.addEventListener('DOMContentLoaded', () => {
//   createVehicleOptions();
//   createComparisonSelect('select-vehicle1');
//   createComparisonSelect('select-vehicle2');
//   console.log('Script loaded and DOM fully parsed');
// });

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
  const container = document.getElementById('vehicle-options');
  if (!container) {
      console.error('Vehicle options container not found');
      return;
  }

  vehicles.forEach((vehicle, index) => {
      const label = document.createElement('label');
      label.className = 'vehicle-option';
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'vehicle';
      radio.value = index;
      if (index === 0) radio.checked = true;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(vehicle.name));
      container.appendChild(label);
  });
  console.log('Vehicle options created');
}

function calculateTimeAndFuel(distance, vehicle) {
  const time = distance / (vehicle.topSpeed * 0.9); // average speed at 90% of top speed
  const fuelNeeded = distance / vehicle.fuelEfficiency;
  const inRange = distance <= vehicle.maxRange;
  return { time, fuelNeeded, inRange };
}

document.getElementById('calculate-time').addEventListener('click', () => {
  const distance = parseFloat(document.getElementById('distance').value);
  if (isNaN(distance) || distance <= 0) {
      alert('Please enter a valid distance');
      return;
  }
  const vehicleIndex = parseInt(document.querySelector('input[name="vehicle"]:checked').value);
  const vehicle = vehicles[vehicleIndex];
  const result = calculateTimeAndFuel(distance, vehicle);

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <p>Vehicle: ${vehicle.name}</p>
      <p>Time to travel ${distance} km: ${result.time.toFixed(2)} hours</p>
      <p>Fuel needed: ${result.fuelNeeded.toFixed(2)} liters</p>
      <p>${result.inRange ? 'Within range' : 'Out of range'}</p>
  `;
  console.log('Travel time calculated');
});

function createComparisonSelect(id) {
  const selectContainer = document.getElementById(id);
  if (!selectContainer) {
      console.error(`Select container ${id} not found`);
      return;
  }
  
  const select = document.createElement('select');
  select.className = 'vehicle-select';
  vehicles.forEach((vehicle, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.text = vehicle.name;
      select.appendChild(option);
  });
  selectContainer.appendChild(select);
}

document.getElementById('compare-two-vehicles').addEventListener('click', () => {
  const distance = parseFloat(document.getElementById('distance').value);
  if (isNaN(distance) || distance <= 0) {
      alert('Please enter a valid distance');
      return;
  }
  const vehicle1Index = parseInt(document.querySelector('#select-vehicle1 select').value);
  const vehicle2Index = parseInt(document.querySelector('#select-vehicle2 select').value);
  const vehicle1 = vehicles[vehicle1Index];
  const vehicle2 = vehicles[vehicle2Index];

  const result1 = calculateTimeAndFuel(distance, vehicle1);
  const result2 = calculateTimeAndFuel(distance, vehicle2);

  const comparisonResultDiv = document.getElementById('two-vehicle-comparison-result');
  comparisonResultDiv.innerHTML = `
      <div class="vehicle-comparison">
          <p><strong>Vehicle:</strong> ${vehicle1.name}</p>
          <p><strong>Time to travel ${distance} km:</strong> ${result1.time.toFixed(2)} hours</p>
          <p><strong>Fuel needed:</strong> ${result1.fuelNeeded.toFixed(2)} liters</p>
          <p><strong>Status:</strong> ${result1.inRange ? 'Within range' : 'Out of range'}</p>
      </div>
      <div class="vehicle-comparison">
          <p><strong>Vehicle:</strong> ${vehicle2.name}</p>
          <p><strong>Time to travel ${distance} km:</strong> ${result2.time.toFixed(2)} hours</p>
          <p><strong>Fuel needed:</strong> ${result2.fuelNeeded.toFixed(2)} liters</p>
          <p><strong>Status:</strong> ${result2.inRange ? 'Within range' : 'Out of range'}</p>
      </div>
  `;
  console.log('Two vehicle comparison results displayed');
});

document.getElementById('compare-all-vehicles').addEventListener('click', () => {
  const distance = parseFloat(document.getElementById('distance').value);
  if (isNaN(distance) || distance <= 0) {
      alert('Please enter a valid distance');
      return;
  }
  const comparisonResultDiv = document.getElementById('all-vehicles-comparison-result');
  comparisonResultDiv.innerHTML = '<h3>Comparison Results for All Vehicles:</h3>';

  vehicles.forEach(vehicle => {
      const result = calculateTimeAndFuel(distance, vehicle);
      const vehicleResult = document.createElement('div');
      vehicleResult.className = 'vehicle-comparison';
      vehicleResult.innerHTML = `
          <p><strong>Vehicle:</strong> ${vehicle.name}</p>
          <p><strong>Time to travel ${distance} km:</strong> ${result.time.toFixed(2)} hours</p>
          <p><strong>Fuel needed:</strong> ${result.fuelNeeded.toFixed(2)} liters</p>
          <p><strong>Status:</strong> ${result.inRange ? 'Within range' : 'Out of range'}</p>
          <hr>
      `;
      comparisonResultDiv.appendChild(vehicleResult);
  });
  console.log('All vehicle comparison results displayed');
});

document.addEventListener('DOMContentLoaded', () => {
  createVehicleOptions();
  createComparisonSelect('select-vehicle1');
  createComparisonSelect('select-vehicle2');
  console.log('Script loaded and DOM fully parsed');
});
