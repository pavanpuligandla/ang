import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateMessagesComponent } from '../messages/create/create.messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewMessagesComponent } from '../messages/view/view.messages.component';
import { ModalModule } from "ngx-bootstrap";
import { CreateUsersComponent } from '../users/create/create.users.component';
import { ViewUsersComponent } from '../users/view/view.users.component';
import { DashboardComponent } from './dashboard.component';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  declarations: [
    CreateMessagesComponent,
    ViewMessagesComponent,
    CreateUsersComponent,
    ViewUsersComponent,
    DashboardComponent,
    RegisterComponent
  ]
})
export class DashboardModule { }
