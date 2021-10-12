import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.users.component.html',
  styleUrls: ['./view.users.component.css']
})
export class ViewUsersComponent implements OnInit {
 userStatusFlag = true;
  constructor() { }

  ngOnInit() {
  }
  userStatus(e) {
    this.userStatusFlag = e.target.checked;
    console.log(this.userStatusFlag)
  }
  userInfo: Users[] = [
    { id: 1, firstname: 'Samppa', lastname: 'Nori', username: 'SamppaNori', emailaddress: 'Member@Samppa.com', address: 'addressaddress', country: 'IND', status: true },
    { id: 2, firstname: 'Estavan', lastname: 'Lykos', username: 'EstavanLykos', emailaddress: 'Estavan@test.com', address: 'addressaddressaddress', country: 'US', status: false },
    { id: 3, firstname: 'Chetan', lastname: 'Mohamed', username: 'ChetanMohamed', emailaddress: 'Chetan@test.com', address: 'address', country: 'US', status: false },
    { id: 4, firstname: 'Derick', lastname: 'Maximinus', username: 'DerickMaximinus', emailaddress: 'Derick@Maximinus.com', address: 'addressaddress', country: 'UK', status: true },
    { id: 5, firstname: 'Friderik', lastname: 'Dávid', username: 'FriderikDávid', emailaddress: 'Friderik@Dávid.com', address: 'addressaddressaddress', country: 'IND', status: true },
    { id: 6, firstname: 'Samppa', lastname: 'Nori', username: 'SamppaNori', emailaddress: 'Member@Samppa.com', address: 'addressaddress', country: 'IND', status: true },
    { id: 7, firstname: 'Estavan', lastname: 'Lykos', username: 'EstavanLykos', emailaddress: 'Estavan@test.com', address: 'addressaddressaddress', country: 'US', status: false },
    { id: 8, firstname: 'Chetan', lastname: 'Mohamed', username: 'ChetanMohamed', emailaddress: 'Chetan@test.com', address: 'address', country: 'US', status: false },
    { id: 9, firstname: 'Derick', lastname: 'Maximinus', username: 'DerickMaximinus', emailaddress: 'Derick@Maximinus.com', address: 'addressaddress', country: 'UK', status: true }
  ];

}
