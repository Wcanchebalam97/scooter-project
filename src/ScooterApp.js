const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations= {
      station1:[],
      station2:[],
      station3:[]
    }

    this.registeredUsers={
      //will get added 
    }
  }

  //methods
  registerUser(username, password, age){
    if(this.registerUsers!==username && age>=18){
      this.registerUsers.username=User;
      console.log("User had been registered.");
      return User;
    } else {
      throw new Error("User is already registered or the user is too young.");
    }
  }

  loginUser(username, password){
    try {
      for(let key in this.registeredUsers){
        if(key===username && password===User.password){
          console.log("User is logged in.")
        }
      }
    } catch (error) {
      console.error("Username or password is incorrect.");
    }
  }

  logoutUser(username){
    this.registeredUsers.User.logoutUser();
    console.log("User has been logged out.");
    if(!this.registerUser.User.logoutUser()){
      throw new Error("No such user is logged in.");
    }
  }

  createScooter(station){
    let scooter = new scooter(station);
    
    console.log("Created scooter.");
    if(!station){
      throw new Error("Station does not exist");
    }

    return scooter;
  }

  dockScooter(scooter, station){
    this.station.station1.push(scooter);
    console.log("Scooter is docked");
  }

  rentScooter(scooter, user){
    //ran out of time as of 8:25AM on 2/27/2023
  }
}

module.exports = ScooterApp
