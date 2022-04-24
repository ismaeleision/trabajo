import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-carta-id',
  templateUrl: './carta-id.component.html',
  styleUrls: ['./carta-id.component.css']
})
export class CartaIdComponent implements OnInit {

  id:String = "";
  Carta:any = [];

  constructor(private route: ActivatedRoute, private crudService: CrudService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.url[2].toString();
    this.crudService.GetCarta(this.id).subscribe(res => {
      this.Carta = res;
    });    
  }

}
