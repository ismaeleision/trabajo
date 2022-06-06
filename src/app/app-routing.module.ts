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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'carta/page/:page', component: CartaComponent },
  { path: 'carta/id/:id', component: CartaIdComponent},
  { path: 'set/:set/:page', component: SetsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buscar/:palabra/:page', component: CoincidenciasComponent },
  { path: 'buscador/:palabra/:page', component: CoincidenciasComponent },
  { path: 'user/:user_email', component: UserComponent },
  {path: 'mazo/:usuario/:id', component: MazoComponent},
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
