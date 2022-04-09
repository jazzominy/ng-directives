import { Directive, EventEmitter, Host, Input, OnChanges, Optional, Output, SimpleChanges } from '@angular/core';
import { ToggleDirective } from './toggle.directive';

@Directive({
  exportAs: 'toggleProvider',
  selector: 'toggle, [toggle], [toggleProvider]',
})
export class ToggleProviderDirective implements OnChanges {
    @Input() toggleProvider!: ToggleDirective;
    toggle: ToggleDirective;

    // @Host() tells angular to look for the instance on current element for instance
    // of ToggleDirective and not on ancestors 
    constructor(@Host() @Optional() private toggleDirective: ToggleDirective) {
        this.toggle = toggleDirective;
    }
  
    // If we are providing a toggle directive from parent then use that else use the one from host element
    ngOnChanges(changes: SimpleChanges): void {
        const {toggleProvider} = changes;
        
        if (toggleProvider) {
            this.toggle = toggleProvider.currentValue || this.toggleDirective;
        }
    }
}
