import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public sesion:SessionStorageService) { }

  ngOnInit(): void {
  }

   //borra los datos guardados en sesion
deslogueo(){
  this.sesion.clear();
  console.log("Saliendo");
}

}
