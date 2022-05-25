import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import {SessionStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Mazos:any =[];
  nombre:String = "";
  usuario:String= "";

  constructor(private crudService: CrudService, public sesion: SessionStorageService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.sesion.retrieve('usuario');
    this.crudService.getMazos(this.usuario).subscribe(data =>{
      this.Mazos= data;
      this.sesion.store('mazos', data);
    });
  }

  //tiene que recoger el nombre del mazo y crearlo con el email del usuario
  nuevoMazo(){
    //crea el mazo comunicandose con la api
    this.crudService.crearMazo(this.nombre, this.sesion.retrieve('usuario')).subscribe(data =>{
      //borrar los consoles una vez me asegure que no falla
      console.log(data);
    });

    //recarga la pagina una vez ha terminado
    window.location.reload();
  }

  //Carga los datos a el nombre
  nombreMazo(event:any){
    this.nombre = event.target.value;
  }

  redirigir(id:any){
this.router.navigate(['/mazo/'+this.usuario+'/'+id]);
  }
}
