import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackCreateComponent } from './track-create/track-create.component';
import { TrackEditComponent } from './track-edit/track-edit.component';
import { TrackDeleteComponent } from './track-delete/track-delete.component';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrackCreateComponent,
    TrackEditComponent,
    TrackDeleteComponent
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
    TrackCreateComponent,
    TrackEditComponent,
    TrackDeleteComponent
  ]
})
export class TrackModule { }
