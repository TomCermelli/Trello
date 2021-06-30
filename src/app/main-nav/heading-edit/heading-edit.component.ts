import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Heading } from 'src/app/model/heading';
import { HeadingService } from 'src/app/services/heading.service';

@Component({
  selector: 'app-heading-edit',
  templateUrl: './heading-edit.component.html',
  styleUrls: ['./heading-edit.component.css']
})
export class HeadingEditComponent implements OnInit {

  heading : any = {} as Heading;
  titleValidator : boolean = true;
  titleLengthValidator: boolean = true;

  constructor(private headingService: HeadingService, private toastr: ToastrService, private modale: NgbActiveModal, private router: Router, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getHeadingById();
  }

  close() {
    this.modale.dismiss();
  }

  getHeadingById() {
    this.activateRoute.params.subscribe(res => {
      this.headingService.getById(res.id).subscribe(params =>{
        this.heading = params;
      })
    });
  }

  editHeading(form : NgForm) {
    this.titleValidator = !this.heading.title ? this.titleValidator = false : this.titleValidator = true;
    this.titleLengthValidator = this.heading.title && this.heading.title.length < 5 ? this.titleLengthValidator = false : this.titleLengthValidator = true;
    if(this.titleValidator && this.titleLengthValidator){
      this.headingService.update(this.heading).subscribe( res => {

      });
      this.toastr.success("Votre rubrique a été modifié, vous allez ensuite être redirigé vers le forum", "Modification validé");
      setTimeout(() => {this.router.navigate(['forum']); }, 3000)
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }

}
