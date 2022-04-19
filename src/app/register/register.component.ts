import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: String = "";
  password: String = "";

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    
  }

  register() {
    const email= this.email;
    const password= this.password;
    this.crudService.register(email, password).subscribe(data =>{
      console.log(data);
      console.log("registro completado");
    });
  }
}
