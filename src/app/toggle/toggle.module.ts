import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleDirective } from './toggle.directive';
import { SwitchComponent } from '../switch/switch.component';
import { ToggleButtonComponent } from './toggle-button.component';
import { ToggleOffComponent } from './toggle-off.component';
import { ToggleOnComponent } from './toggle-on.component';
import { ToggleProviderDirective } from './toggle-provider.directive';
import { DefaultAttributeDirective } from './default-attribute.directive';

const components = [
  ToggleDirective,
  ToggleProviderDirective,
  DefaultAttributeDirective,
  ToggleButtonComponent,
  ToggleOffComponent,
  ToggleOnComponent
]
@NgModule({
  declarations: [
    SwitchComponent,
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: components
})
export class ToggleModule { }
