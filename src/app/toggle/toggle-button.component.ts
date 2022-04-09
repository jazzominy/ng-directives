import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'app-toggle-button',
  template: `<app-switch [on]="toggle.on" (click)="onClick()"></app-switch>`,
})
export class ToggleButtonComponent implements OnInit {
  
  constructor(public toggle: ToggleComponent) {}

  ngOnInit() {
  }
  
  onClick() {
    this.toggle.setToggleState(!this.toggle.on);
  }
}
