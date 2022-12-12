import { Directive } from '@angular/core';
import { DataProviderDirective } from './data-provider.directive';

@Directive({
    selector: '[assetUpload]',
})
export class AssetUploadDirective {
    constructor (private dataProvider: DataProviderDirective) {

	}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		console.info('***************AssetUploadDirective -> ', this.dataProvider?.dataProvider)
	}
}