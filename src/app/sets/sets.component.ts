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

 recargar(){
  this.ngOnInit();
 }
}
