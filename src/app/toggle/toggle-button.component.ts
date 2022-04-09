import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  template: `<app-switch [on]="on" (click)="onClick()"></app-switch>`,
})
export class ToggleButtonComponent implements OnInit {

  @Input() on: boolean | undefined;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
    this.on = !this.on;
    this.toggle.emit(this.on);
  }
}
