import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Mazos:any =[];
  nombre:String = "";

  constructor(private crudService: CrudService, public sesion: SessionStorageService) { }

  ngOnInit(): void {
   
  }

  //tiene que recoger el nombre del mazo y crearlo con el email del usuario
  nuevoMazo(){
    console.log("Creando mazo "+this.nombre);
  }

  //Carga los datos a el nombre
  nombreMazo(event:any){
    this.nombre = event.target.value;
    console.log(this.nombre); 
  }
}
