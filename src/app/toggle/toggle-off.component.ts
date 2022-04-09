import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-off',
  template: '<ng-content *ngIf="!on"></ng-content>',
})
export class ToggleOffComponent  {
  @Input() on!: boolean;
}
