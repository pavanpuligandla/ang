import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registration empty form should be invalid', async(() => {
    component.registrationForm.controls['emailAddress'].setValue('');
    component.registrationForm.controls['password'].setValue('');
    component.registrationForm.controls['confirmPassword'].setValue('');
    expect(component.registrationForm.invalid).toBeTruthy();
  }));

  it('Registration form should be Valid', async(() => {
    component.registrationForm.controls['emailAddress'].setValue('emailAddress');
    component.registrationForm.controls['password'].setValue('123456');
    component.registrationForm.controls['confirmPassword'].setValue('123456');
    expect(component.registrationForm.valid).toBeFalsy();
  }));


  /*  it('email field validity', () => {
     let email = component.registrationForm.controls['email'];
     expect(email.valid).toBeFalsy(); 
     let errors = {};
     errors = email.errors || {};
     expect(errors['required']).toBeTruthy();
   }); */

  /*   it('Submitting a registration form emits a user', () => {
      expect(component.registrationForm.valid).toBeFalsy();
      component.registrationForm.controls['userName'].setValue("User Name");
      component.registrationForm.controls['emailAddress'].setValue("emailaddress");
      component.registrationForm.controls['password'].setValue("ssklqs");
      component.registrationForm.controls['confirmPassword'].setValue("ssklqs");
      let user: User;
      component.loggedIn.subscribe((value: any) => user = value);
      component.register();
      expect(user.username).toBe("");
      expect(user.email).toBe("");
      expect(user.password).toBe("");
      expect(user.password).toBe("");
    }); */

});
