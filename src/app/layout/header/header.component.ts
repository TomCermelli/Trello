import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heading } from 'src/app/model/heading';
import { HeadingService } from 'src/app/services/heading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headings: any = {} as Heading;

  constructor(private headingService : HeadingService, private router: Router) { }

  ngOnInit(): void {
    this.populateNav();
  }

  populateNav(){
    this.headingService.getAll().subscribe((res : any) => {
      this.headings = res.body;
    })
  }

}
