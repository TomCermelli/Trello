import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-track-create',
  templateUrl: './track-create.component.html',
  styleUrls: ['./track-create.component.css']
})
export class TrackCreateComponent implements OnInit {

  constructor(private modale: NgbActiveModal, private trackService: TrackService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  close() {
    this.modale.dismiss();
  }

  createTrack(form : NgForm){
    if (form.valid) {
      this.trackService.create(form.value).subscribe(res => {
      });
      this.toastr.success("Votre nouvelle ajout a été prise en compte", "Création valide");
    }
    else {
      this.toastr.error("Vous n'avez pas correctement remplit le champs, réessayer s'il vous plait", "Erreur")
    }
  }

}
