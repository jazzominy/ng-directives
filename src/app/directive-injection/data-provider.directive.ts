import { Directive, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[dataProvider]',
})
export class DataProviderDirective implements OnInit {

	@Input()
	dataProvider: {} = {};

	constructor () {
		console.info('New upload data');
	}

	ngOnInit(): void {
		console.info('************DataProviderDirective -> ', this.dataProvider);
	}
}