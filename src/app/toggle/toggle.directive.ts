import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  exportAs: 'toggle',
  selector: 'toggle, [toggle]',
})
export class ToggleDirective {

  @Input() on: boolean | undefined;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  
  setToggleState (on: boolean) {
    this.on = on;
    this.toggled.emit(on);
  }
}