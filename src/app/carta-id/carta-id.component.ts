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
  grafico:any = [];


  constructor(private route: ActivatedRoute, private crudService: CrudService, private location: Location, public sesion: SessionStorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.url[2].toString();
    this.crudService.GetCarta(this.id).subscribe(res => {
      this.Carta = res;

      this.crudService.getGrafico(this.id).subscribe(res =>{
       this.grafico = res;

        let date = new Date;
        let day = date.getUTCDate();
        let month = date.getUTCMonth() + 1
        let dia = day+"/"+month;
        let values= Object.values(res);
        //Si coincide la clave con precios es la posicion donde estan los precios
          if ( values[0].length == 0  || dia != values[0][0].precio.date){
              this.crudService.getPrecio(this.Carta.id).subscribe(res => {
                console.log("Buscamos el precio")
                //Parte los valores por un lado y las claves por otro para poder manipular el objeto que recogemos de la peticion https
                let values= Object.values(res);
                let keys = Object.keys(res);
                //Si coincide la clave con precios es la posicion donde estan los precios
                for(let i=0; i<=keys.length; i++){
                  if(keys[i]=="prices"){
                    let date = new Date;
                    let day = date.getUTCDate();
                    let month = date.getUTCMonth() + 1
                    let valor = { "date": day+'/'+month, "precio": values[i]};
                    this.crudService.updateCarta(this.id, values[i]).subscribe(res => {
                      console.log("Actualizando carta"+res);
                    });
                    this.crudService.updatePrecio(this.id, valor).subscribe(res => {
                      console.log(res);
                    });
                  }
                }
              });
            }
      });
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
