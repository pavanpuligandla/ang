import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MessageType, MessageDuration, CompanyType } from 'src/app/models/message.model';
import { MessagesService } from 'src/app/services/messages.service.';

@Component({
  templateUrl: 'view.messages.component.html',
  styleUrls: ['./view.messages.component.css']
})
export class ViewMessagesComponent implements OnInit {
  messagesForm: FormGroup;
  selectedRow: Number;
  messageType: MessageType[];
  companyType: CompanyType[];
  messageDuration: MessageDuration[];
  cmpType: string;
  constructor(private formBuilder: FormBuilder,
    private messagesService: MessagesService) {
  }

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

  messages: any[] = [{ MessageContent: 'Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt...', MessageTypeId: 'Company', MessageDurationId: 'Temporary' },
  { MessageContent: 'Amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...', MessageTypeId: 'Global', MessageDurationId: 'Permanent' },
  { MessageContent: 'Adipisicing elit, sed do eiusmod tempor incididunt...', MessageTypeId: 'Company', MessageDurationId: 'Permanent' },
  { MessageContent: 'Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt...', MessageTypeId: 'Company', MessageDurationId: 'Temporary' },
  { MessageContent: 'Amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...', MessageTypeId: 'Global', MessageDurationId: 'Permanent' },
  { MessageContent: 'Adipisicing elit, sed do eiusmod tempor incididunt...', MessageTypeId: 'Company', MessageDurationId: 'Permanent' },
  { MessageContent: 'Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt...', MessageTypeId: 'Company', MessageDurationId: 'Temporary' },
  { MessageContent: 'Amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...', MessageTypeId: 'Global', MessageDurationId: 'Permanent' },
  { MessageContent: 'Adipisicing elit, sed do eiusmod tempor incididunt...', MessageTypeId: 'Company', MessageDurationId: 'Permanent' },
  ];

  trackByCode(index: number, emp: any): string {
    return emp.code;
  }

  @ViewChild('largeModal') public largeModal: ModalDirective;
  
  get f() { return this.messagesForm.controls; }

  addMessage() {
    console.log(this.messagesForm.value);
  }

  setClickedRow = function (index) {
    this.selectedRow = index;
  }

  public msgChange(event): void {
    this.cmpType = event.target.value; 
  }
}