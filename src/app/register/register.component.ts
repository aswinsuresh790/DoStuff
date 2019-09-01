import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from './../model/user';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserForm: FormGroup;
  User: User;

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Designation: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private database: DatabaseService) { }


login() {
    this.router.navigate(['']);
}

  CreateUser(userData) {
    console.warn('Your order has been submitted', userData);
    this.User = this.UserForm.value;
    this.database.createuser(this.UserForm.value).subscribe((user: any) => {
      console.log('User created', user);
    });
    this.UserForm.reset();
  }
}
