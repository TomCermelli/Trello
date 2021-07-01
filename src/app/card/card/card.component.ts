import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Heading } from 'src/app/model/heading';
import { Track } from 'src/app/model/track';
import { CardService } from 'src/app/services/card.service';
import { TrackCreateComponent } from 'src/app/track/track-create/track-create.component';
import { CardCreateComponent } from '../card-create/card-create.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  heading: any = {} as Heading;
  tracks: any = {} as  Track;
  trackColor: any = ["'red','green','blue','yellow',"];

  constructor(private cardService: CardService, private toastr: ToastrService, private router: Router, private activateRoute: ActivatedRoute, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.getHeadingByName();

  }

  // Cette méthode permet d'ouvrir un modal ou se trouve le formulaire pour crée une rubrique
  openModalTrack(): void {
    let modalRef = this.modalService.open(TrackCreateComponent); // On demande au modalService d'ouvrir un composant en particulié , ici le HeadingCreateComponent où se trouve le formulaire de création
    modalRef.result.then((confirm) => {
      this.populateCard(); // au moment de confirmer 
    }, (close) => {
      this.populateCard();
    });
  }

  // Cette méthode permet d'ouvrir un modal ou se trouve le formulaire pour crée une carte
  openModalCard(): void {
    let modalRef = this.modalService.open(CardCreateComponent); // On demande au modalService d'ouvrir un composant en particulié , ici le HeadingCreateComponent où se trouve le formulaire de création
    modalRef.result.then((confirm) => {
      this.populateCard(); // au moment de confirmer 
    }, (close) => {
      this.populateCard();
    });
  }

  getHeadingByName() {
    this.activateRoute.params.subscribe(res => {
      this.heading = res.title;
      this.cardService.getByHeadingName(res.title);
    })
  }

  onTaskDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  populateCard(){

  }

}
