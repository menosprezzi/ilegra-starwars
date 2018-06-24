import { Component, OnInit } from '@angular/core';
import { NavService } from '../../app/nav/nav.service';
import {StarWarsApiService} from '../../services/star-wars-api/star-wars-api.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  displayContent = 'TRAILER';
  film: any;

  // @TODO: Create an Interface for Character.
  characters: any[] = [];

  constructor(private nav: NavService,
              private swapi: StarWarsApiService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
    nav.setBarStyle('transparent');

    route.paramMap
      .subscribe((params: ParamMap) => {
        this.swapi.getFilm(parseInt(params.get('id'), null))
          .subscribe(film => {
            this.film = film;
            this.film.director = {
              name: film.director,
              wiki: this.getWikiUrl(film.director)
            };
            // If the film has n Producers.
            this.film.producers = film.producer.split(',').map(producerName => {
              return {
                name: producerName,
                wiki: this.getWikiUrl(producerName)
              };
            });
            this.loadCharacters();
          });
      });
  }

  ngOnInit() {}

  getWikiUrl(name: string) {
    const serializedName = name.replace(/\s/g, '_');
    return this.sanitizer.bypassSecurityTrustUrl('https://pt.wikipedia.org/wiki/' + serializedName);
  }

  setDisplayContent(content: string) {
    this.displayContent = content;
  }

  loadCharacters() {
    this.film.characters.forEach(charUrl => {
      this.swapi.getCall(charUrl)
        .subscribe(char => {
          this.characters.push(char);
        });
    });
  };
}
