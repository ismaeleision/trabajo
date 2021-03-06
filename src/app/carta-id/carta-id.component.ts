import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Location } from '@angular/common';
import {SessionStorageService} from 'ngx-webstorage';
import { Router} from '@angular/router';

@Component({
  selector: 'app-carta-id',
  templateUrl: './carta-id.component.html',
  styleUrls: ['./carta-id.component.css']
})
export class CartaIdComponent implements OnInit {

  id:String = "";
  Carta:any = [];
  grafico:any = [];


  constructor(private route: ActivatedRoute, private crudService: CrudService, private location: Location, public sesion: SessionStorageService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.url[2].toString();
    this.crudService.GetCarta(this.id).subscribe(res => {
      this.Carta = res;

      this.crudService.getGrafico(this.id).subscribe(res =>{
        this.grafico = Object.entries(res).map(([type, value]) => ({type, value}));
        this.grafico = this.grafico[0];
        this.grafico = Object.entries(this.grafico).map(([type, value]) => ({type, value}));
        this.grafico = this.grafico[1];
        this.grafico = Object.entries(this.grafico).map(([type, value]) => ({type, value}));
        this.grafico = this.grafico[1];

        let date = new Date;
        let day = date.getUTCDate();
        let month = date.getUTCMonth() + 1
        let dia = day+"/"+month;
        let values= Object.values(res);
        //Si coincide la clave con precios es la posicion donde estan los precios
          if ( values[0].length == 0  || dia != values[0][4].precio.date){
              this.crudService.getPrecio(this.Carta.id).subscribe(res => {
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
                    });
                    this.crudService.updatePrecio(this.id, valor).subscribe(res => {
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

  //Deberia de desviar la ruta a tcgplayer e idealmente que te pille tu cuenta y te la a??ada al carrito
  //si no que te envie a la pagina de la carta 
  comprar(){
console.log("XD no esta hecho, vuelve a intentarlo m??s tarde");
  }

  //A??ade a tu lista de seguimiento o a tus mazos creados
  anadir(id:String){
    console.log(this.Carta);
    this.crudService.anadirCartaMazo(id, this.Carta).subscribe(res => {
      console.log(res);
    });    
  }
  limpiar(ruta:String){
    if(ruta=="login"){
      this.ngOnInit();
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/login']));
    }else if(ruta=="register"){
      this.ngOnInit();
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/register']));
    }
   
  // if you need to scroll back to top, here is the right place
   //window.scrollTo(0, 0);
  }
}
