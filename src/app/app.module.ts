import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveInjectionModule } from './directive-injection/directive-injection.module';
import { QuillInlineStyleModule } from './quill-inline-style/quill-inline-style.module';
import { ToggleModule } from './toggle/toggle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToggleModule,
    QuillInlineStyleModule,
    DirectiveInjectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
