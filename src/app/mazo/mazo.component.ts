import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import {SessionStorageService} from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mazo',
  templateUrl: './mazo.component.html',
  styleUrls: ['./mazo.component.css']
})
export class MazoComponent implements OnInit {
Mazo:any = [];
id:any = "";

  constructor(private crudService: CrudService, public sesion: SessionStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.url[1].toString();
    this.crudService.getMazo(this.sesion.retrieve('usuario'), this.id).subscribe(res => {
      this.Mazo = res;
    });    

  }

}
