import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Heading } from 'src/app/model/heading';
import { HeadingService } from 'src/app/services/heading.service';
import { HeadingDeleteComponent } from '../heading-delete/heading-delete.component';
import { HeadingEditComponent } from '../heading-edit/heading-edit.component';

@Component({
  selector: 'app-heading-list',
  templateUrl: './heading-list.component.html',
  styleUrls: ['./heading-list.component.css']
})
export class HeadingListComponent implements OnInit {

  headings: Heading[] = [];

  constructor(private headingService: HeadingService, protected modalService: NgbModal) { }

  // Au lancement on remplit notre tableau de Heading
  ngOnInit(): void {
    this.populateHeading();
  }

  openEditModal(heading: Heading) {
    let modalRef = this.modalService.open(HeadingEditComponent);
    modalRef.componentInstance.heading = heading;
    modalRef.result.then((confirm) => {
      this.populateHeading();
    }, (close) => {
      this.populateHeading()

    });
    this.populateHeading()
  }
  

  // Cette méthode permet de récupérer toute nos rubriques 
  populateHeading(): Heading[] {
    // On récupère toute nos rubriques grâce au service crée au préalable avec le méthode getAll()
    // Celui-ci nous retourne un observable c'est pour quoi on chaine avec le .subscribe
    this.headingService.getAll().subscribe((res : any) => {
      // Grâce à toute les données récupérées on peut maintenant remplir le tableau de Heading crée plus haut
      this.headings = res.body;
    })

    return this.headings
  }

  deleteHeading(heading: Heading) {
    let modalRef = this.modalService.open(HeadingDeleteComponent);
    modalRef.componentInstance.heading = heading;
    modalRef.result.then((confirm) => {
      this.populateHeading();
    }, (close) => {

    });
  }
}
