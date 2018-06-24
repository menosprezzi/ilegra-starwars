import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-yt-embedded-search',
  templateUrl: './yt-embedded-search.component.html',
  styleUrls: ['./yt-embedded-search.component.scss']
})
export class YtEmbeddedSearchComponent implements OnInit {

  @Input() query: string;
  youtubeVideoId: string;
  youtubeSrcUrl: SafeResourceUrl;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'id',
        type: 'video',
        key: 'AIzaSyCSbYQAzf2FD-f_ScTc4zqU4DBWwpysRSc',
        q: this.query
      }
    }).subscribe((searchResult: any) => {
      this.youtubeVideoId = searchResult.items[0].id.videoId;
      this.youtubeSrcUrl = this.getYoutubeUrl(this.youtubeVideoId);
    });
  }

  getYoutubeUrl(youtubeVideoId: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&amp;showinfo=0`);
  }

}
