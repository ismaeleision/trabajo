import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Location } from '@angular/common';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-carta-id',
  templateUrl: './carta-id.component.html',
  styleUrls: ['./carta-id.component.css']
})
export class CartaIdComponent implements OnInit {

  id:String = "";
  Carta:any = [];

  constructor(private route: ActivatedRoute, private crudService: CrudService, private location: Location, public sesion: SessionStorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.url[2].toString();
    this.crudService.GetCarta(this.id).subscribe(res => {
      this.Carta = res;
    });    
  }

  //Sirve para ir a la pagina anterior
  volver(){
    this.location.back();
  }

  //Deberia de desviar la ruta a tcgplayer e idealmente que te pille tu cuenta y te la añada al carrito
  //si no que te envie a la pagina de la carta 
  comprar(){
console.log("XD no esta hecho, vuelve a intentarlo más tarde");
  }

  //Añade a tu lista de seguimiento o a tus mazos creados
  anadir(id:String){
    console.log(this.Carta);
    this.crudService.anadirCartaMazo(id, this.Carta).subscribe(res => {
      console.log(res);
    });    
  }
}
