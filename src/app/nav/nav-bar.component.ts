import {Component, ElementRef, Input, OnInit} from '@angular/core';
import { NavService } from './nav.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';
import {Element} from '@angular/compiler';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() appContent: HTMLElement;

  navTitle: string;
  navSubtitle: string;
  canGoBack: boolean;

  constructor(private nav: NavService, private eltRef: ElementRef) {
    nav.navigation.subscribe(() => {
      this.canGoBack = nav.history.length > 0;

      // Reset Scroll
      this.appContent.scroll(0, 0);
      // Flushing Title
      this.navTitle = null;
      this.navSubtitle = null;
    });

    nav.style.subscribe(style => {
      switch (style) {
        case 'default':
          this.appContent.classList.add('padding');
          eltRef.nativeElement.className = '';
          break;
        case 'transparent':
          this.appContent.classList.remove('padding');
          eltRef.nativeElement.classList.add('transparent');
      }
    });
  }

  goBack() {
    this.nav.pop();
  }

  ngOnInit() {

    fromEvent(this.appContent, 'scroll')
      .subscribe(() => {
        if (this.appContent.scrollTop > 0) {
          if (!this.eltRef.nativeElement.classList.contains('scrolled')) {
            this.eltRef.nativeElement.classList.add('scrolled');
          }

          // @TODO: Cache title elements.
          const titleElt = this.appContent.querySelector('h1');
          if (titleElt) {
            if (this.appContent.scrollTop >= titleElt.getBoundingClientRect().top) {
              const subtitleElt = this.appContent.querySelector('h2');
              this.navTitle = titleElt.innerText;
              this.navSubtitle = subtitleElt ? subtitleElt.innerText : null;
            } else {
              this.navTitle = null;
              this.navSubtitle = null;
            }
          }

        } else {
          this.eltRef.nativeElement.classList.remove('scrolled');
        }
      });
  }
}
