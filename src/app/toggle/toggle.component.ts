import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleButtonComponent } from './toggle-button.component';
import { ToggleOffComponent } from './toggle-off.component';
import { ToggleOnComponent } from './toggle-on.component';

@Component({
  selector: 'app-toggle',
  template: `<ng-content></ng-content>`,
})
export class ToggleComponent implements AfterContentInit {

  @Input() on: boolean | undefined;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  @ContentChild(ToggleButtonComponent) toggleBtn!: ToggleButtonComponent;
  @ContentChild(ToggleOnComponent) toggleOn!: ToggleOnComponent;
  @ContentChild(ToggleOffComponent) toggleOff!: ToggleOffComponent;

  constructor() { }
  
  ngAfterContentInit () {
    this.toggleBtn.toggle.subscribe(on => {
      this.on = on;
      this.toggled.emit(on);
      this.toggleOn.on = on;
      this.toggleOff.on = on;
    })
  }
}
