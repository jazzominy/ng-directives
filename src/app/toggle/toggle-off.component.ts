import { Component } from '@angular/core';
import { ToggleProviderDirective } from './toggle-provider.directive';

@Component({
  selector: 'app-toggle-off',
  template: '<ng-content *ngIf="!toggleProvider.toggle.on"></ng-content>',
})
export class ToggleOffComponent  {
  constructor(public toggleProvider: ToggleProviderDirective) {}
}
