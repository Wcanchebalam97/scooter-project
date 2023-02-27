class User {
  // User code here
  constructor(username, password, age){
    this.username=username;
    this.password=password;
    this.age=age;
    this.isLoggedIn=false;
  }

  //methods
  login(password){
    if(!password){
      throw new Error('Incorrect password')
    } else {
      this.isLoggedIn=true;
    }
  }

  logout(){
    this.isLoggedIn=false;
  }
}

module.exports = User
