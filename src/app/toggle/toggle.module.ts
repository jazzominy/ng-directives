import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { SwitchComponent } from '../switch/switch.component';
import { ToggleButtonComponent } from './toggle-button.component';
import { ToggleOffComponent } from './toggle-off.component';
import { ToggleOnComponent } from './toggle-on.component';

const components = [
  ToggleComponent,
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
