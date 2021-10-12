import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.users.component.html',
  styleUrls: ['./create.users.component.css']
})
export class CreateUsersComponent implements OnInit {
  createUsersForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createUsersForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.createUsersForm.value);
  }
}
