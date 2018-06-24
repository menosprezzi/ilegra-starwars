import { Component, OnInit } from '@angular/core';
import { NavService } from '../../app/nav/nav.service';
import {StarWarsApiService} from '../../services/star-wars-api/star-wars-api.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
              private route: ActivatedRoute) {
    nav.setBarStyle('transparent');

    route.paramMap
      .subscribe((params: ParamMap) => {
        this.swapi.getFilm(parseInt(params.get('id'), null))
          .subscribe(film => {
            this.film = film;
            this.loadCharacters();
          });
      });
  }

  ngOnInit() {}

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
