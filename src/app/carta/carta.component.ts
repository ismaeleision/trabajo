import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  Cartas:any = [];
  page:number = 1;
  total:any = [] ;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
    });    
    this.crudService.GetCartasTotal().subscribe(res =>{
      this.total = res;
    });
  }

  pagina(num: Number){
    this.crudService.GetCartas(num).subscribe(res => {
      this.Cartas = res;
    });    
  }
}
