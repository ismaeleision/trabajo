import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  Cartas:any = [];
  page:number = 0;
  total:number =  100;
  sets:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
    });    
    this.crudService.GetCartasTotal().subscribe(res =>{
      this.total = res.imite;
    });
    this.crudService.GetSets().subscribe(res =>{
      this.sets = res;
    });
  }

  paginaAnterior(){
    this.page=this.page-1;
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
      
    });    
  }

  paginaPosterior(){
    this.page=this.page+1;
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
     
    });    
  }

  CartasSet(nombre:String){
    this.crudService.CartasSet(nombre).subscribe(res => {
      this.Cartas = res;
    });    
  }
}
