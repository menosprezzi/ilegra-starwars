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
  films: any[];

  constructor(private nav: NavService,
              private swapi: StarWarsApiService,
              sanitizer: DomSanitizer) {
    nav.setBarStyle('default');

    swapi.getFilms().subscribe(({ results }) => {
      this.films = results.map((film, index) => {
        return {
          id: index + 1,
          coverURL: sanitizer.bypassSecurityTrustResourceUrl(`/assets/images/sd/films/${index + 1}.jpg`),
        };
      });
    });
  }

  ngOnInit() {
  }

}
