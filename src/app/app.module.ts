import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CartaComponent } from './carta/carta.component';//Carta
import { RegisterComponent } from './register/register.component';//Registro
import { LoginComponent } from './login/login.component';//Login
import {NgxWebstorageModule} from 'ngx-webstorage';//Sesion-Local Storage
import { SetsComponent } from './sets/sets.component';
import { CartaIdComponent } from './carta-id/carta-id.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CoincidenciasComponent } from './coincidencias/coincidencias.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    RegisterComponent,
    LoginComponent,
    SetsComponent,
    CartaIdComponent,
    BuscadorComponent,
    CabeceraComponent,
    CoincidenciasComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
