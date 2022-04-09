import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleProviderDirective } from './toggle-provider.directive';
import { ToggleDirective } from './toggle.directive';

@Component({
  selector: 'app-toggle-button',
  template: `<app-switch [on]="toggleProvider.toggle.on" (click)="onClick()"></app-switch>`,
})
export class ToggleButtonComponent implements OnInit {
  
  constructor(public toggleProvider: ToggleProviderDirective) {}

  ngOnInit() {
  }
  
  onClick() {
    this.toggleProvider.toggle.setToggleState(!this.toggleProvider.toggle.on);
  }
}
