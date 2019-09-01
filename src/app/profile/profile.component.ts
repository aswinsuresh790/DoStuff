import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
