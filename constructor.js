// Define a Vehicle constructor function
function Vehicle() {
    this.start = function() {
      console.log("The vehicle is starting.");
    };
    this.stop = function() {
      console.log("The vehicle is stopping.");
    };
  }
  
  // Define a FourWheeler constructor function that inherits from Vehicle
  function FourWheeler(brand) {
    Vehicle.call(this); // Call the Vehicle constructor within the FourWheeler context
    this.wheels = 4;
    this.brand = brand || "";
  }
  
  // Set up the prototype chain for inheritance
  FourWheeler.prototype = Object.create(Vehicle.prototype);
  FourWheeler.prototype.constructor = FourWheeler;
  
  // Define a method specific to FourWheeler
  FourWheeler.prototype.drive = function() {
    console.log(`The ${this.brand} four-wheeler is now driving.`);
  };
  
  // Example usage
  const toyotaFourWheeler = new FourWheeler("Toyota");
  toyotaFourWheeler.start(); // The vehicle is starting.
  toyotaFourWheeler.drive(); // The Toyota four-wheeler is now driving.
  toyotaFourWheeler.stop(); // The vehicle is stopping.
  