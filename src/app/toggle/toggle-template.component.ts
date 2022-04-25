import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'toggle-template',
    template: `
        <ng-container *ngTemplateOutlet="layout; context:{
            on,
            fns: {
                toggle
            }
        }"></ng-container>
    `
})
export class ToggleTemplateComponent implements OnInit {

    @ContentChild(TemplateRef) layout!: TemplateRef<any>;
    @Input() on!: boolean;
    @Output() toggled: EventEmitter<boolean> = new EventEmitter();

    constructor() { }
    
    ngOnInit() { }

    setToggleState (on: boolean) {
        this.on = on;
        this.toggled.emit(on);
    }

    toggle = (value: boolean) => {
        this.setToggleState(value);
    }
}
