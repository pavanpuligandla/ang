import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy,OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  public changes: MutationObserver;
  public element: HTMLElement;

  public firstName:string;
  public lastName:string;
  public lastLogin: Date;
  constructor(@Inject(DOCUMENT) _document?: any) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
    this.firstName=localStorage.getItem('FirstName');
    this.lastName=localStorage.getItem('LastName');
    this.lastLogin= new Date(localStorage.getItem('LastLogin'));    
  }

  ngOnInit() {
    for (let menuItem of this.navItems) {
      if (menuItem.name === 'Confidential Link') {
        menuItem.attributes.disabled = localStorage.getItem('Role') === 'Hacking Homelessness Administrator'? false : true;
        menuItem.icon=localStorage.getItem('Role') === 'Hacking Homelessness Administrator'?'icon-puzzle':'icon-ban';
      }
    }
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  messages = ['Sed do eiusmod tempor incididunt...', 
  'Amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...', 
  'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...', 
  'Adipisicing elit, sed do eiusmod tempor incididunt...'];
}
