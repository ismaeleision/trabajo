import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  palabra:String = "";
  Cartas:any = [];
  busca:String="";
 
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.palabra= "";
    this.Cartas= [];
  }

  //Si la palabra es mas larga de 4 letras comienza a lanzar peticiones de busqueda
  buscador(x: any){
    this.palabra=x.target.value;
    if(this.palabra.length>2){
      this.crudService.buscador(this.palabra).subscribe(res => {
        this.Cartas = res;
      });    
    }else{
      this.Cartas = [];
    }
  }

  //limpia el input del buscador y redirige correctamente
  limpiar(){
    this.ngOnInit();
    this.busca="";
  }
}
