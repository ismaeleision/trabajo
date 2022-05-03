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
 

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.palabra= "";
  }

  //Si la palabra es mas larga de 4 letras comienza a lanzar peticiones de busqueda
  buscador(x: any){
    this.palabra=x.target.value;
    if(this.palabra.length>4){
      this.crudService.buscador(this.palabra).subscribe(res => {
        this.Cartas = res;
      });    
    }
    console.log(this.palabra.length);
    console.log(x.target.value);
    console.log(this.Cartas);
  }
}
