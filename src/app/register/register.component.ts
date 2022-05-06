import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'register',
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
      //borrar los consoles una vez me asegure que no falla
      console.log(data);
      console.log("registro completado");
    });
  }
}
