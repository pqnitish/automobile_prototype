// Define a base object for Vehicle
const vehiclePrototype = {
    start: function() {
      console.log("The vehicle is starting.");
    },
    stop: function() {
      console.log("The vehicle is stopping.");
    }
  };
  
  // Create a FourWheeler object that inherits from vehiclePrototype
  const fourWheeler = Object.create(vehiclePrototype);
  
  // Add specific properties for FourWheeler
  fourWheeler.wheels = 4;
  fourWheeler.brand = "";
  
  // Define a method specific to FourWheeler
  fourWheeler.drive = function() {
    console.log(`The ${this.brand} four-wheeler is now driving.`);
  };
  
  // Example usage
  fourWheeler.brand = "Maruti";
  fourWheeler.start(); // The vehicle is starting.
  fourWheeler.drive(); // The Toyota four-wheeler is now driving.
  fourWheeler.stop(); // The vehicle is stopping.
  