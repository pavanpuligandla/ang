import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewMessagesComponent } from './view.messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap";

describe('ViewMessagesComponent', () => {
  let component: ViewMessagesComponent;
  let fixture: ComponentFixture<ViewMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMessagesComponent],
      imports: [FormsModule, ReactiveFormsModule, ModalModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Message should be invalid', async(() => {
    component.messagesForm.controls['message'].setValue('');
    expect(component.messagesForm.invalid).toBeTruthy();
  }));

  it('Message should be valid', () => {
    component.messagesForm.controls['message'].setValue('EPM HEP');
    expect(component.messagesForm.valid).toBeFalsy();
  });

  it('Message field validitation checks', () => {
    let errors = {};
    let message = component.messagesForm.controls['message'];

    // message address is required
    errors = message.errors || {};
    expect(errors['required']).toBeTruthy();

    // Message having length less than minLength
    message.setValue("epam");
    errors = message.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Message having length more less than maxLength
    message.setValue("At HEP, we honor the generosity of our donors by remaining committed to sound financial management and complete transparency in all of our operations. As a Four-Star Charity, as ranked by Charity Navigator for the 6th consecutive year (an honor only 4% of charities nationwide can claim), you can rest assured that your donation to HEP goes to the programs and services that help break the cycle of homelessness for thousands of individuals, veterans and families every year.");
    errors = message.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();

    // Setting up correct message address
    message.setValue("EPM HEP - WE PROVIDE SAFE SHELTER, SUPPORT SERVICES, AND STABILITY FOR FAMILIES WITH CHILDREN IN-NEED.");
    errors = message.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
