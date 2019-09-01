import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


dashboard()
{
  this.router.navigate(['dashboard']);
}

profile()
{
    this.router.navigate(['profile']);
}

spaces()
{
    this.router.navigate(['spaces']);
}

members()
{
    this.router.navigate(['members']);
}
}
