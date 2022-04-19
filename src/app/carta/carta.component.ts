import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  Cartas:any = [];
  page:Number = 1;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCartas(this.page).subscribe(res => {
      this.Cartas = res;
    });    
  }

  pagina(num: Number){
    this.crudService.GetCartas(num).subscribe(res => {
      this.Cartas = res;
    });    
  }
}
