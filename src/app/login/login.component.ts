import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private crudService: CrudService, public sesion:SessionStorageService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.crudService.login(user).subscribe( data => {
      //data es el token jwt
      this.sesion.store('token', data.token);
      this.sesion.store('usuario', data.email);
      console.log(data);
    });
  }

  salir(){
    this.sesion.clear();
  }
}