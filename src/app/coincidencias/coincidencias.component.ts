import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'coincidencias',
  templateUrl: './coincidencias.component.html',
  styleUrls: ['./coincidencias.component.css']
})
export class CoincidenciasComponent implements OnInit {

  palabra:String = "";
  Cartas:any = [];
  page:number = 0;
  limite:number =  100;

  constructor(private route: ActivatedRoute, private crudService: CrudService) { }

  ngOnInit(): void {
   this.palabra = this.route.snapshot.url[1].toString();
    this.crudService.buscadorCoincidencias(this.palabra, this.page).subscribe(res => {
      this.Cartas = res;
    });    
  }

  paginaAnterior(){
    this.page=this.page-1;
    this.crudService.buscadorCoincidencias(this.palabra, this.page).subscribe(res => {
      this.Cartas = res;
    });    
  }

  paginaPosterior(){
    this.page=this.page+1;
    this.crudService.buscadorCoincidencias(this.palabra, this.page).subscribe(res => {
      this.Cartas = res;
    });    
  }
}
