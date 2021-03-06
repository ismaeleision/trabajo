import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {

  Cartas:any= [];
  sets:any=[];
  setActual: String= "";
  setReal: String = "";
  page:number = 0;
  limite=20;

  constructor(private crudService: CrudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.crudService.GetSets().subscribe(res =>{
      this.sets = res;
      this.setActual = this.route.snapshot.url[1].toString();
     this.page = Number(this.route.snapshot.url[2]);
     this.crudService.CartasSet(this.setActual, this.page).subscribe(res => {
      this.Cartas = res;
    });    
    //Bucle para buscar el nombre del set en vez de la nomenclatura
    for(let i=0; i<this.sets.length; i++){
      if (this.sets[i]._id.set==this.setActual){
       this.setReal = this.sets[i]._id.set_name;
      }
    }
    });
  }

  CartasSet(nombre:String, page:any){
    this.crudService.CartasSet(nombre, page).subscribe(res => {
      this.Cartas = res;
    });    
  }

  paginaAnterior(){
    this.page=this.page-1;
    this.crudService.CartasSet(this.setActual,this.page).subscribe(res => {
      this.Cartas = res;
    });    
  }

  paginaPosterior(){
    this.page=this.page+1;
    this.crudService.CartasSet(this.setActual,this.page).subscribe(res => {
      this.Cartas = res;
    });    
  }

  //No funciona correctamente deberia recargar la pagina con la nueva url
 recargar(){
  this.ngOnInit();
 }

 pagina(numero: number){
  this.page = numero;
  this.crudService.CartasSet(this.setActual, this.page).subscribe(res => {
    this.Cartas = res;
  });
}
}
