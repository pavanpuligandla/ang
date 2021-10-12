import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginData } from 'src/app/models/login.data.model';
import * as jwt_decode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any;
  private loginData: LoginData;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [localStorage.getItem('email') ? localStorage.getItem('email') : '', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      password: [localStorage.getItem('password') ? localStorage.getItem('password') : '', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      rememberMe: [localStorage.getItem('rememberme') ? true : false]
    });
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  showSuccess() {
    this.toastr.error('Invalid credentials. Please try again.', 'Error');
  }

  login() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.authService.login(this.f.email.value, this.f.password.value, this.f.rememberMe.value).subscribe((res: any) => {
      //Remember Me feature  
      if (this.f.rememberMe.value) {
        localStorage.setItem('email', this.f.email.value);
        localStorage.setItem('password', this.f.password.value);
        localStorage.setItem('rememberme', 'true');
      }
      else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberme');
      }
      this.loginData = res;
      let decoded = jwt_decode(this.loginData.Token);
      localStorage.setItem('bearerToken', this.loginData.Token);
      localStorage.setItem('FirstName', this.loginData.FirstName);
      localStorage.setItem('LastName', this.loginData.LastName);
      localStorage.setItem('LastLogin', this.loginData.LastLogin);
      localStorage.setItem('Role', decoded.Role);
      this.router.navigateByUrl('dashboard');
    }, error => {
      this.error = error.status;
      this.showSuccess();
    });
  }
}