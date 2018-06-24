import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NavService } from './nav.service';

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [ CommonModule ],
  providers: [ NavService ],
  exports: [ NavBarComponent ],
})
export class NavModule { }
