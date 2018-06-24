import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sw-opening-crawl',
  templateUrl: './sw-opening-crawl.component.html',
  styleUrls: ['./sw-opening-crawl.component.scss']
})
export class SwOpeningCrawlComponent implements OnInit {

  @Input() text: string;
  @ViewChild('titlesContent') titlesContent: ElementRef;

  constructor() { }

  ngOnInit() {
    this.titlesContent.nativeElement.innerText = this.text
      .replace(/\r\n\r\n/g, '\n\n')
      .replace(/\r\n/g, ' ');
  }

}
