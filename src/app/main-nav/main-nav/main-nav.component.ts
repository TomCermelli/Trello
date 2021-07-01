import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Heading } from 'src/app/model/heading';
import { HeadingService } from 'src/app/services/heading.service';
import { HeadingCreateComponent } from '../heading-create/heading-create.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  // Ce tableau vide est remplit par la suite par la méthode populateHeading()
  // Il est donc utilisable coté front pour affiché l'enssemble des rubriques
  headings: Heading[] = [];

  //Ces variables sont utilisées coté html comme condition afin de changer la couleur du background du bouton correspondant
  strategie: string = "Stratégie et Edition";
  marketing: string = "Marketing Opérationnel";
  photoVideo: string = "Photo & Vidéo";
  production: string = "Production";
  creationGraphique: string = "Création Graphique (PAO)";
  digital: string = "Digital";

  constructor(private headingService: HeadingService, protected modalService : NgbModal,private toastr: ToastrService,private router: Router) { }

  // Au lancement on remplit notre tableau de Heading
  ngOnInit(): void {
    this.populateHeading();
  }

  // Cette méthode permet d'ouvrir un modal ou se trouve le formulaire pour crée une rubrique
  openModal(): void {
    let modalRef = this.modalService.open(HeadingCreateComponent); // On demande au modalService d'ouvrir un composant en particulié , ici le HeadingCreateComponent où se trouve le formulaire de création
    modalRef.result.then((confirm) => {
      this.populateHeading(); // au moment de confirmer 
    }, (close) => {
      this.populateHeading();
    });
  }

  // Cette méthode permet de récupérer toute nos rubriques 
  populateHeading() {
    // On récupère toute nos rubriques grâce au service crée au préalable avec le méthode getAll()
    // Celui-ci nous retourne un observable c'est pour quoi on chaine avec le .subscribe
    this.headingService.getAll().subscribe((res : any) => {
      console.log(res.body);
      
      // Grâce à toute les données récupérées on peut maintenant remplir notre tableau vide initialisé plus haut
      this.headings = res.body;
    })
  }

}
