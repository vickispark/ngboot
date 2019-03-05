import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
   // sessionStorage.setItem('authenticaterUser', 'vivek');
    if(username==="in28minutes" && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    return true;
    //let user = sessionStorage.getItem('authenticaterUser')
    //return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
