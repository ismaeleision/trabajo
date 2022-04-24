import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SetsComponent } from './sets/sets.component';
import { CartaIdComponent } from './carta-id/carta-id.component';

const routes: Routes = [
  { path: 'carta', component: CartaComponent },
  { path: 'carta/page/:page', component: CartaComponent },
  { path: 'carta/id/:id', component: CartaIdComponent},
  { path: 'set/:set', component: SetsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
