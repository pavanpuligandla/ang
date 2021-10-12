import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMessagesComponent } from '../messages/create/create.messages.component';
import { ViewMessagesComponent } from '../messages/view/view.messages.component';
import { DashboardComponent } from './dashboard.component';
import { CreateUsersComponent } from '../users/create/create.users.component';
import { ViewUsersComponent } from '../users/view/view.users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'createMessages',
        component: CreateMessagesComponent,
        data: {
          title: 'Create Messages'
        }
      },
      {
        path: 'viewMessages',
        component: ViewMessagesComponent,
        data: {
          title: 'View Messages'
        }
      },
      {
        path: 'createUser',
        component: CreateUsersComponent,
        data: {
          title: 'Create User'
        }
      },
      {
        path: 'viewUsers',
        component: ViewUsersComponent,
        data: {
          title: 'View Users'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
