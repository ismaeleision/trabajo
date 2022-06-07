import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Carusel:  any=[];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getTop().subscribe(res => {
      this.Carusel = res;
    });    
  }

}
