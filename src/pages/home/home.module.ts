import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import {SharedModule} from '../../app/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,

    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [],
})
export class HomeModule { }
