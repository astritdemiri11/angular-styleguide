import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe, CustomComponent]
})
export class SharedModule { }
