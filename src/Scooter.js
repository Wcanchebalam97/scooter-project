class Scooter{
  // scooter code here
  static nextSerial = serial + 1;
  constructor(station){
    this.station=station;
    //all scooters are docked at a station, charged, and in good repair initially
    this.user = null;
    this.charge = 100;
    this.isBroken = false;
    //initialize other properties (they are docked in the station)
    this.serial = serial; //might change later -- index of an array from another class 
  }

  //methods
  rent(user) {
    //the "===true" is not required because this.isBroken will evaluate to "true"!
    //also, we may want to separate these into different if statements to ensure we know exactly what the error is
    if(this.charge<20 || this.isBroken===true){
      throw new Error('Scooter needs to charge or scooter needs a repair')
    } else {
      this.user = user 
      this.station = null;
    }
  }

  dock(station){
    this.user=null;
    this.station = station;
  }

  async recharge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100

    console.log('Charge complete');   
}

async requestRepair() {
  console.log('Repairing');
  
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
  this.isBroken = false;

  console.log('Repair complete');   
}
}


module.exports = Scooter
