import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String ="";
  lastname: String = "";
  email: String = "";
  password: String = "";

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    
  }

  register() {
    const user = {email: this.email, password: this.password};
    this.crudService.login(user).subscribe( data => {
      console.log(data);
    });
  }
}
