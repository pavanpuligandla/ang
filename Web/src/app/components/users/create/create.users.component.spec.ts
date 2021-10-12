import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUsersComponent } from './create.users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('CreateComponent', () => {
  let component: CreateUsersComponent;
  let fixture: ComponentFixture<CreateUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUsersComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('create user empty form should be invalid', async(() => {
    component.createUsersForm.controls['firstName'].setValue('');
    component.createUsersForm.controls['lastName'].setValue('');
    component.createUsersForm.controls['userName'].setValue('');
    component.createUsersForm.controls['emailAddress'].setValue('');
    component.createUsersForm.controls['password'].setValue('');
    component.createUsersForm.controls['confirmPassword'].setValue('');
    component.createUsersForm.controls['address1'].setValue('');
    component.createUsersForm.controls['address2'].setValue('');
    expect(component.createUsersForm.invalid).toBeTruthy();
  }));

  it('create user form should be valid', async(() => {
    component.createUsersForm.controls['firstName'].setValue('Qwerty');
    component.createUsersForm.controls['lastName'].setValue('Asdfgh');
    component.createUsersForm.controls['userName'].setValue('user@epam.com');
    component.createUsersForm.controls['emailAddress'].setValue('user@epam.com');
    component.createUsersForm.controls['password'].setValue('Qwerty1234');
    component.createUsersForm.controls['confirmPassword'].setValue('Qwerty1234');
    component.createUsersForm.controls['address1'].setValue('EPAM Hyderabad Telangana');
    component.createUsersForm.controls['address2'].setValue('EPAM Hyderabad Telangana');
    expect(component.createUsersForm.valid).toBeTruthy();
  }));

  it('create user first name field validitation checks', () => {
    let errors = {};
    let firstName = component.createUsersForm.controls['firstName'];

    // First name is required
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy();

    // Setting up first name having length less than minLength 6
    firstName.setValue("abcd");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Setting up first name having length more than maxLength 15
    firstName.setValue("QwetyuiopagshdklfZ");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();

    // Setting up correct first Name
    firstName.setValue("QwertyKeyboard");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();
  });

  it('create user last name field validitation checks', () => {
    let errors = {};
    let lastName = component.createUsersForm.controls['lastName'];

    // Last name is required
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();

    // Setting up last name having length less than minLength 6
    lastName.setValue("abcd");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Setting up last name having length more than maxLength 15
    lastName.setValue("QwetyuiopagshdklfZ");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();

    // Setting up correct last name
    lastName.setValue("QwertyKeyboard");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();
  });

  it('create user user name field validitation checks', () => {
    let errors = {};
    let userName = component.createUsersForm.controls['userName'];

    // User name is required
    errors = userName.errors || {};
    expect(errors['required']).toBeTruthy();

    // Setting up user name having length less than minLength 6
    userName.setValue("abcd");
    errors = userName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Setting up user name having length more than maxLength 15
    userName.setValue("QwetyuiopagshdklfZ");
    errors = userName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();

    // Setting up correct user name
    userName.setValue("QwertyKeyboard");
    errors = userName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();
  });


  it('create user email field validitation checks', () => {
    let errors = {};
    let email = component.createUsersForm.controls['emailAddress'];

    // Email address is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Email address validation
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Setting up correct email address
    email.setValue("user_name@epam.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  });


  it('create user password field validitation checks', () => {
    let errors = {};
    let password = component.createUsersForm.controls['password'];

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

  it('create user confirm password field validitation checks', () => {
    let errors = {};
    let confirmPassword = component.createUsersForm.controls['confirmPassword'];

    // Pwd field is required
    errors = confirmPassword.errors || {};
    expect(errors['required']).toBeTruthy();

    // Setting up correct pwd
    confirmPassword.setValue("123456789");
    errors = confirmPassword.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('create user address1 field validitation checks', () => {
    let errors = {};
    let address1 = component.createUsersForm.controls['address1'];

    // Pwd field is required
    errors = address1.errors || {};
    expect(errors['required']).toBeTruthy();

    // Setting up correct pwd
    address1.setValue("123456789");
    errors = address1.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('create user address2 field validitation checks', () => {
    let errors = {};
    let address2 = component.createUsersForm.controls['address2'];

    // Pwd field is required
    errors = address2.errors || {};
    expect(errors['required']).toBeTruthy();

    // Setting up correct pwd
    address2.setValue("123456789");
    errors = address2.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
