import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[defaultAttribute]',
})
export class DefaultAttributeDirective {

    // We can use this decorator to add attributes to the host element
    // So this binding adds role="switch" attribute where ever defaultAttribute directive is used on an element
    @HostBinding('attr.role') role = 'switch';

    // Here aria-checked="true" will be added if on prop is true else aria-checked="false"
    @HostBinding('attr.aria-checked')
    @Input() on:boolean = false;

    constructor() {
    }
}
