import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './children/child/child.component';
import { ChildListComponent } from './children/child-list/child-list.component';
import { ChildCustomComponent } from './children/shared/child-custom/child-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    ChildComponent,
    ChildListComponent,
    ChildCustomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
