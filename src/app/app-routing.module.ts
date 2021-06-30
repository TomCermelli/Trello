import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card/card.component';
import { ConnectionComponent } from './connection/connection/connection.component';
import { HomeComponent } from './layout/home/home.component';
import { HeadingEditComponent } from './main-nav/heading-edit/heading-edit.component';
import { HeadingListComponent } from './main-nav/heading-list/heading-list.component';
import { RegistrationComponent } from './registration/registration/registration.component';

const routes: Routes = [

  // ----- HOME -----
  { path: 'home', component: HomeComponent },

  // ----- Pôle -----
  { path: 'heading', component: HeadingListComponent },
  { path: 'heading/edit/:id', component: HeadingEditComponent },

  // ----- Trello -----
  { path: 'home/:title', component:  CardComponent},
  { path: 'home/:title/track', component:  CardComponent},

  // ----- Connection / Inscription -----
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
