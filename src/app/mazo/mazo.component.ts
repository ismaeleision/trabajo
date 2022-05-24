import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import {SessionStorageService} from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mazo',
  templateUrl: './mazo.component.html',
  styleUrls: ['./mazo.component.css']
})
export class MazoComponent implements OnInit {

  constructor(private crudService: CrudService, public sesion: SessionStorageService, private ruta: ActivatedRoute, private location: Location) { }

  Mazo: any = [];
  id:String = "";
  usuario:String = "";

  ngOnInit(): void {
    this.id = this.ruta.snapshot.url[2].toString();
    this.usuario = this.sesion.retrieve("usuario");
    this.crudService.getMazo(this.id, this.usuario).subscribe(data =>{
      this.Mazo= data;
      console.log(this.Mazo);
    });
  }

  borrarMazo(){
    this.crudService.borrarMazo(this.id, this.usuario).subscribe(data =>{
     console.log("Mazo "+this.Mazo.nombre+" borrado");
    });
    this.location.back();
  }

}
