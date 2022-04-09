import { Component, Input } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'app-toggle-on',
  template: '<ng-content *ngIf="toggle.on"></ng-content>',
})
export class ToggleOnComponent  {
    constructor(public toggle: ToggleComponent) {}
}
