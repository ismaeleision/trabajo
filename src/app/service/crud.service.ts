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

  GetCartasTotal(){
    let API_URL = `${this.REST_API}/carta/total`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  GetSets(){
    return this.httpClient.get(`${this.REST_API}/carta/set`);
  }

  CartasSet(nombre: String){
    return this.httpClient.get(`${this.REST_API}/carta/set/`+nombre);
  }

  buscador(nombre: String){
    return this.httpClient.get(`${this.REST_API}/buscador/`+nombre);
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
