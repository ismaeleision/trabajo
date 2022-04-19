import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private crudService: CrudService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.crudService.login(user).subscribe( data => {
      console.log(data);
    });
  }
}