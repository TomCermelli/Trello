import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardDeleteComponent } from './card-delete/card-delete.component';
import { CardCreateComponent } from './card-create/card-create.component';



@NgModule({
  declarations: [
    CardComponent,
    CardEditComponent,
    CardDeleteComponent,
    CardCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
