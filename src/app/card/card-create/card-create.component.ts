import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  constructor(private modale: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss();
  }

  createCard(form : NgForm){

  }

}
