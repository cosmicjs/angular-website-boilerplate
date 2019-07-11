import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  servicesCall()
  {
    this.route.navigate(['services']);
  }
  aboutCall()
  {
    this.route.navigate(['about']);
  }
  contactCall()
  {
    this.route.navigate(['contact']);
  }
  portfolioCall()
  {
    this.route.navigate(['portfolio']);
  }
  homeCall()
  {
    this.route.navigate(['']);
  }

}
