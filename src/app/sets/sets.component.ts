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

  constructor(private crudService: CrudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.crudService.GetSets().subscribe(res =>{
      this.sets = res;
      this.setActual = this.route.snapshot.url[1].toString();
      //Deberia encontrar el array en el que se encuentra el set correcto
      for(let i=0; i<this.sets.length; i++){
        if(this.sets[i]._id.set==this.setActual)
        //Lo asigna a x para enviarlo a la funcion y poder imprimir bien el nombre
         var x  = this.sets[i]._id.set_name;
      }
    this.CartasSet(this.setActual, x);
    });

  }

  CartasSet(nombre:String, set:String){
    this.setActual = set;
    this.crudService.CartasSet(nombre).subscribe(res => {
      this.Cartas = res;
    });    
  }

}
