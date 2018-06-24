import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';

@Injectable()
export class NavService {

  @Output() navigation: EventEmitter<string> = new EventEmitter<string>();
  @Output() style: EventEmitter<string> = new EventEmitter<string>();
  history: string[] = [];

  // @TODO: Handle browser's back button.
  constructor(private router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd && ev.url !== '/') {
        this.history.push(ev.url);
        this.navigation.emit(ev.url);
      }
    });
  }

  async push(route: string, extras?: NavigationExtras) {
    await this.router.navigateByUrl(route, extras);
    this.history.push(route);
    this.navigation.emit(route);
  }

  async pop() {
    if (this.history.length > 0) {
      this.history.pop();
      const route = this.history[this.history.length - 1] || '/';
      console.log(route);
      await this.router.navigateByUrl(route);
      this.navigation.next(route);
    }
  }

  setBarStyle(style: string) {
    this.style.next(style);
  }

}
