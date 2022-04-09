import { AfterContentInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `<ng-content></ng-content>`,
})
export class ToggleComponent {

  @Input() on: boolean | undefined;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  
  setToggleState (on: boolean) {
    this.on = on;
    this.toggled.emit(on);
  }
}
