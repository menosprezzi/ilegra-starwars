import { Component, OnInit } from '@angular/core';
import {NavService} from '../../app/nav/nav.service';
import {StarWarsApiService} from '../../services/star-wars-api/star-wars-api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @TODO: Create a Interface for Film.
  isLoading: boolean;
  error: string;

  films: any[];

  constructor(private nav: NavService,
              private swapi: StarWarsApiService,
              private sanitizer: DomSanitizer) {}

  loadFilms() {
    this.error = null;
    this.isLoading = true;
    this.swapi.getFilms().subscribe(
      ({ results }) => {
        this.films = results.map((film, index) => {
          return {
            id: index + 1,
            coverURL: this.sanitizer.bypassSecurityTrustResourceUrl(`assets/lazy/images/sd/films/${index + 1}.jpg`),
          };
        });
      },
      err => {
        this.error = err;
        this.isLoading = false;
      },
      () => this.isLoading = false
    );
  }

  ngOnInit() {
    this.nav.setBarStyle('default');
    this.loadFilms();
  }

}
