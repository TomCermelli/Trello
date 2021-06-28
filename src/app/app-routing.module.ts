import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection/connection.component';
import { HomeComponent } from './layout/home/home.component';
import { RegistrationComponent } from './registration/registration/registration.component';

const routes: Routes = [

  // ----- HOME -----
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnectionComponent },
  { path: 'inscription', component: RegistrationComponent },

  // -----REDIRECTION-----
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
