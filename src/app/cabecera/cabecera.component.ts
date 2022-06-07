import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import { CrudService } from './../service/crud.service';
import { Router} from '@angular/router';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  random:any ;

  constructor(public sesion: SessionStorageService, private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.crudService.getRandom().subscribe(res => {
      this.random = res;
    });    
  }

     //borra los datos guardados en sesion
deslogueo(){
  this.sesion.clear();
}

limpiar(){
  this.ngOnInit();
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
  this.router.navigate(['/carta/id/'+this.random._id]));
// if you need to scroll back to top, here is the right place
 //window.scrollTo(0, 0);
}
}
