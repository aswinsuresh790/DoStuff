import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from './../model/user';
import { DatabaseService } from '../database.service';
import { Userlogin } from '../model/userlogin';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserForm: FormGroup;
  User: Userlogin;

  constructor(private formBuilder: FormBuilder, private database: DatabaseService, private router: Router) { }


  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
   register()
   {
       this.router.navigate(['register']);
   }
  Login(form) {
    this.User = form.value;
    console.warn('Your user been submitted', this.User);
    console.log(this.User);
    this.database.login(form.value).subscribe((user: any) => {
      console.log('User logined', user);
      if (user) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
