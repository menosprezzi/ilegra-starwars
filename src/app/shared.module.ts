import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ SpinnerComponent, ErrorMessageComponent ]
})
export class SharedModule { }
