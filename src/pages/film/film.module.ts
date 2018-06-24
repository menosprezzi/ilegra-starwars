import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './film.component';
import { YtEmbeddedSearchComponent } from './yt-embedded-search/yt-embedded-search.component';
import { SwOpeningCrawlComponent } from './sw-opening-crawl/sw-opening-crawl.component';
import {SharedModule} from '../../app/shared.module';

@NgModule({
  declarations: [
    FilmComponent,
    YtEmbeddedSearchComponent,
    SwOpeningCrawlComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: FilmComponent }
    ])
  ],
  providers: [],
})
export class FilmModule { }
