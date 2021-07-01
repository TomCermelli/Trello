import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Heading } from 'src/app/model/heading';
import { HeadingService } from 'src/app/services/heading.service';

@Component({
  selector: 'app-heading-delete',
  templateUrl: './heading-delete.component.html',
  styleUrls: ['./heading-delete.component.css']
})
export class HeadingDeleteComponent implements OnInit {

  @Input() heading : any = {} as Heading
  headings : any = {} as Heading

  constructor(private headingService: HeadingService, private modale: NgbActiveModal, private toastr: ToastrService) { 

  }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss()
  }

  deleteHeading(heading : Heading){
    this.headingService.delete(heading).subscribe(res => {
      this.headingService.populateHeading();
    })
    
    this.toastr.success("La supréssion de votre rubrique s'est bien déroulé", "Suppréssion validé");
    this.modale.close();
  }

}
