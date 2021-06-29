import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MainNavModule } from '../main-nav/main-nav.module';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainNavModule,
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
})
export class LayoutModule { }
