import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { SwitchComponent } from '../switch/switch.component';
import { ToggleButtonComponent } from './toggle-button.component';

@NgModule({
  declarations: [
    SwitchComponent,
    ToggleComponent,
    ToggleButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleComponent,
    ToggleButtonComponent
  ]
})
export class ToggleModule { }
