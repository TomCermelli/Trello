import { Component, Input, OnInit } from '@angular/core';
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

  @Input() heading : any = {} as Heading


  titleValidator : boolean = true;
  titleLengthValidator: boolean = true;

  constructor(private headingService: HeadingService, private toastr: ToastrService, private modale: NgbActiveModal, private router: Router, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getHeadingById();
    console.log(this.heading);
    
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

  editHeading() {
    this.titleValidator = !this.heading.title ? this.titleValidator = false : this.titleValidator = true;
    this.titleLengthValidator = this.heading.title && this.heading.title.length < 3 ? this.titleLengthValidator = false : this.titleLengthValidator = true;
    if(this.titleValidator && this.titleLengthValidator){
      this.headingService.update(this.heading).subscribe( res => {

      });
      this.toastr.success("Votre rubrique a été modifié", "Modification validé");
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }

}
