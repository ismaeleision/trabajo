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

  constructor(private route: ActivatedRoute, private crudService: CrudService) { }

  ngOnInit(): void {
   this.palabra = this.route.snapshot.url[1].toString();
    this.crudService.buscadorCoincidencias(this.palabra).subscribe(res => {
      this.Cartas = res;
    });    
  }

}
