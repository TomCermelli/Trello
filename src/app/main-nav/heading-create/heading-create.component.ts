import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HeadingService } from 'src/app/services/heading.service';

@Component({
  selector: 'app-heading-create',
  templateUrl: './heading-create.component.html',
  styleUrls: ['./heading-create.component.css']
})
export class HeadingCreateComponent implements OnInit {

  constructor(private headingService: HeadingService, private toastr: ToastrService, private modale: NgbActiveModal, private router: Router) { }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss();
  }

  createHeading(form: NgForm) {
    if (form.valid) {
      this.headingService.create(form.value).subscribe(res => {
      });
      this.headingService.populateHeading();
      this.toastr.success("Votre nouvelle ajout a été prise en compte", "Création valide");
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}
