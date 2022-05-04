import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public sesion: SessionStorageService) { }

  ngOnInit(): void {
  }

     //borra los datos guardados en sesion
deslogueo(){
  this.sesion.clear();
}

}
