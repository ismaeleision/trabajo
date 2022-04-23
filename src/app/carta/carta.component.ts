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

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
    });    
    this.crudService.GetCartasTotal().subscribe(res =>{
      this.total = res.imite;
      console.log(this.total);
    });
  }

  paginaAnterior(){
    this.page=this.page-1;
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
      console.log(this.page);
    });    
  }

  paginaPosterior(){
    this.page=this.page+1;
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
      console.log(this.page);
    });    
  }
}
