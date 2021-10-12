import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageType, MessageDuration, CompanyType, Messages } from 'src/app/models/message.model';
import { MessagesService } from 'src/app/services/messages.service.';

@Component({
  templateUrl: 'create.messages.component.html',
  styleUrls: ['./create.messages.component.css']
})
export class CreateMessagesComponent implements OnInit {
  messagesForm: FormGroup;
  messageType: MessageType[];
  companyType: CompanyType[];
  messageDuration: MessageDuration[];
  messages: Messages;
  cmpType: string;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesForm = this.formBuilder.group({
      MessageContent: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(250)]],
      MessageTypeId: ['', [Validators.required]],
      CompanyID: [''],
      MessageDurationId: ['', [Validators.required]]
    });

    this.messagesService.GetMessagesTypes().subscribe((res: MessageType[]) => { this.messageType = res; });
    this.messagesService.GetMessagesDurations().subscribe((res: MessageDuration[]) => { this.messageDuration = res; });
    this.messagesService.GetMessagesCompanies().subscribe((res: CompanyType[]) => { this.companyType = res; });
  }

  get f() { return this.messagesForm.controls; }

  showSuccess() {
    this.toastr.success('Message has been added successfully.', 'Success');
  }

  addMessage() {
    this.messages = this.messagesForm.value;
    this.messagesService.AddMessages(this.messages).subscribe(res => {
      this.showSuccess();
      this.messagesForm = this.formBuilder.group({
        MessageContent: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(250)]],
        MessageTypeId: ['', [Validators.required]],
        CompanyID: [''],
        MessageDurationId: ['', [Validators.required]]
      });
    });
  }

  public msgChange(event): void {
    this.cmpType = event.target.value;
  }
}
