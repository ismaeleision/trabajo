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

  constructor(private crudService: CrudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.crudService.GetSets().subscribe(res =>{
      this.sets = res;
    });
    this.CartasSet(this.route.snapshot.url[1].toString());
    console.log(this.route.snapshot.url[1]);
  }

  CartasSet(nombre:String){
    this.crudService.CartasSet(nombre).subscribe(res => {
      this.Cartas = res;
    });    
  }

}
