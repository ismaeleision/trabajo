import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Mazos:any =[];

  constructor(private crudService: CrudService, public sesion: SessionStorageService) { }

  ngOnInit(): void {
    this.crudService.getMazos(this.sesion.retrieve('usuario')).subscribe(res => {
      this.Mazos = res;
    });    
  }

}
