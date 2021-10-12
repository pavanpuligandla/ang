import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, 
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot()
      ],
      providers: [AuthenticationService, ToastrService]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Login empty form should be invalid', async(() => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.invalid).toBeTruthy();
  }));

  it('Login form should be valid', () => {
    component.loginForm.controls['email'].setValue('user_name@epam.com');
    component.loginForm.controls['password'].setValue('epam123456');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('Login email field validitation checks', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];

    // Email address is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Email address pattern
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Setting up correct email address
    email.setValue("user_name@epam.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });


  it('Login password field validitation checks', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];

    // Pwd field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Setting up pwd having length less than minLength
    password.setValue("1234");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Setting up pwd having length more less than maxLength
    password.setValue("123456789absGKSGbsGSgsjbSsS!");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();

    // Setting up correct pwd
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();
  });

  /* it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authenticationService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authenticationService.isAuthenticated).toHaveBeenCalled();
  });

  it('canLogin returns false when the user is not authenticated', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(true);
      expect(component.needsLogin()).toBeFalsy();
      expect(authService.isAuthenticated).toHaveBeenCalled();
  });*/
});
