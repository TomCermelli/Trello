import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeadingCreateComponent } from './heading-create/heading-create.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadingListComponent } from './heading-list/heading-list.component';
import { RouterModule } from '@angular/router';
import { HeadingEditComponent } from './heading-edit/heading-edit.component';

@NgModule({
  declarations: [
    MainNavComponent,
    HeadingCreateComponent,
    HeadingListComponent,
    HeadingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    })
  ],
  exports: [
    MainNavComponent,
    HeadingCreateComponent,
    HeadingListComponent,
    HeadingEditComponent,
  ]
})
export class MainNavModule { }
