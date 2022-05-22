import { Injectable } from '@angular/core';

import { User } from './User';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:3977';
  
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  //Login, 
    login(user: User): Observable<any> {
      return this.httpClient.post(`${this.REST_API}/login`, user);
    }

    //Registro
    register(email: String, password: String){
      return this.httpClient.post(`${this.REST_API}/register`, {email, password});
    }

  // Toma las cartas de la api
  GetCartas(page: any) {
    return this.httpClient.get(`${this.REST_API}/carta/page/${page}`);
  }

  // Coge una carta que coincida con su id
  GetCarta(id: any) {
   return this.httpClient.get(`${this.REST_API}/carta/id/${id}`);
  }

  //Recoge los diferentes sets que hay en las cartas
  GetSets(){
    return this.httpClient.get(`${this.REST_API}/carta/set`);
  }

  //Obtiene las cartas que compartan set
  CartasSet(nombre: String, page:any){
    return this.httpClient.get(`${this.REST_API}/carta/set/`+nombre+`/`+page);
  }

  //Obtiene las 5 primeras coincidencias con la palabra en el buscador
  buscador(nombre: String){
    return this.httpClient.get(`${this.REST_API}/buscador/`+nombre);
  }

  //Obtiene todas las coincidencias con la palabra en el buscador
  buscadorCoincidencias(nombre: String){
    return this.httpClient.get(`${this.REST_API}/buscadorc/`+nombre);
  }

  getMazo( id:String){
    return this.httpClient.get(`${this.REST_API}/mazo/`+id);
  }

    // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
