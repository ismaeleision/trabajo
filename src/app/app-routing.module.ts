import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SetsComponent } from './sets/sets.component';
import { CartaIdComponent } from './carta-id/carta-id.component';
import { CoincidenciasComponent } from './coincidencias/coincidencias.component';
import { UserComponent } from './user/user.component';
import { MazoComponent } from './mazo/mazo.component';


const routes: Routes = [
  { path: 'carta/page/:page', component: CartaComponent },
  { path: 'carta/id/:id', component: CartaIdComponent},
  { path: 'set/:set', component: SetsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buscar/:palabra', component: CoincidenciasComponent },
  { path: 'user', component: UserComponent },
  { path: 'mazo/:id', component: MazoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
