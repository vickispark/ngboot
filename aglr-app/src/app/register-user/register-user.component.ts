import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { API_URL } from './../app.constants';

export class Usr {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  profileForm = new FormGroup({
    userId:new FormControl(''),
    password:new FormControl(''),
    name:new FormControl(''),
    city:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),


  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(JSON.stringify(this.profileForm.value));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
    // ,   'Authorization': 'my-auth-token'
      })
    };
   this.http.post(`${API_URL}/registerUser`
        , this.profileForm.value
        , httpOptions)
        .subscribe((data) => {
          console.log(data);
        });

  }

  constructor(
    private http:HttpClient
  ) { }
  ngOnInit() {
  }

}
