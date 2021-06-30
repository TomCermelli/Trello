import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardDeleteComponent } from './card-delete/card-delete.component';
import { CardCreateComponent } from './card-create/card-create.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    CardEditComponent,
    CardDeleteComponent,
    CardCreateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    DragDropModule,
  ],
  exports: [
    CardComponent,
    CardEditComponent,
    CardDeleteComponent,
    CardCreateComponent
  ]
})
export class CardModule { }
