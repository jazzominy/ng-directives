import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataProviderDirective } from './data-provider.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildOneOneComponent } from './child-one-one/child-one-one.component';
import { AssetUploadDirective } from './asset-upload.directive';

@NgModule({
  declarations: [
    DataProviderDirective,
    AssetUploadDirective,
    ParentComponent,
    ChildOneComponent,
    ChildOneOneComponent,
  ],
  imports: [CommonModule],
  exports: [
	  DataProviderDirective,
    AssetUploadDirective,
    ParentComponent,
    ChildOneComponent,
    ChildOneOneComponent,
  ]
})
export class DirectiveInjectionModule {}
