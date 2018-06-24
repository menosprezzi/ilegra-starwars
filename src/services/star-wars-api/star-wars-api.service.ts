// Refactored code from https://github.com/giammaleoni/ng2-swapi/blob/master/index.ts
// Using Angular 6 and rxjs 6.
// Thanks to @giammaleoni
// @TODO: Make a pull request to the repo.

import { Injectable } from '@angular/core';
import { HttpClient as Http } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class StarWarsApiService {
  constructor(private http: Http) {
  }

  private baseUrl = 'https://swapi.co/api/';

  getRoot(wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl;
    if (wookiee) {
      completeUrl += '?format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getPeople(page: number = null, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'people/';
    if (page || wookiee) {
      completeUrl += '?';
    }
    if (page) {
      completeUrl += 'page=' + page;
    }
    if (page && wookiee) {
      completeUrl += '&';
    }
    if (wookiee) {
      completeUrl += 'format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getPlanets(page: number = null, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'planets/';
    if (page || wookiee) {
      completeUrl += '?';
    }
    if (page) {
      completeUrl += 'page=' + page;
    }
    if (page && wookiee) {
      completeUrl += '&';
    }
    if (wookiee) {
      completeUrl += 'format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getFilms(page: number = null, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'films/';
    if (page || wookiee) {
      completeUrl += '?';
    }
    if (page) {
      completeUrl += 'page=' + page;
    }
    if (page && wookiee) {
      completeUrl += '&';
    }
    if (wookiee) {
      completeUrl += 'format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getSpecies(page: number = null, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'species/';
    if (page || wookiee) {
      completeUrl += '?';
    }
    if (page) {
      completeUrl += 'page=' + page;
    }
    if (page && wookiee) {
      completeUrl += '&';
    }
    if (wookiee) {
      completeUrl += 'format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getVehicles(page: number = null, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/';
    if (page || wookiee) {
      completeUrl += '?';
    }
    if (page) {
      completeUrl += 'page=' + page;
    }
    if (page && wookiee) {
      completeUrl += '&';
    }
    if (wookiee) {
      completeUrl += 'format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getStarships(page: number = null, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'starships/';
    if (page || wookiee) {
      completeUrl += '?';
    }
    if (page) {
      completeUrl += 'page=' + page;
    }
    if (page && wookiee) {
      completeUrl += '&';
    }
    if (wookiee) {
      completeUrl += 'format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getPerson(id: number, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'people/' + id + '/';
    if (wookiee) {
      completeUrl += '?format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getPlanet(id: number, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'planets/' + id + '/';
    if (wookiee) {
      completeUrl += '?format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getFilm(id: number, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'films/' + id + '/';
    if (wookiee) {
      completeUrl += '?format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getSpecie(id: number, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'species/' + id + '/';
    if (wookiee) {
      completeUrl += '?format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getVehicle(id: number, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/' + id + '/';
    if (wookiee) {
      completeUrl += '?format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getStarship(id: number, wookiee: boolean = false): Observable<any> {
    let completeUrl: string = this.baseUrl + 'starships/' + id + '/';
    if (wookiee) {
      completeUrl += '?format=wookiee';
    }
    return this.getCall(completeUrl);
  }

  getPersonSchema(): Observable<any> {
    const completeUrl: string = this.baseUrl + 'people/schema';
    return this.getCall(completeUrl);
  }

  getPlanetSchema(): Observable<any> {
    const completeUrl: string = this.baseUrl + 'planets/schema';
    return this.getCall(completeUrl);
  }

  getFilmSchema(): Observable<any> {
    const completeUrl: string = this.baseUrl + 'films/schema';
    return this.getCall(completeUrl);
  }

  getSpecieSchema(): Observable<any> {
    const completeUrl: string = this.baseUrl + 'species/schema';
    return this.getCall(completeUrl);
  }

  getVehicleSchema(): Observable<any> {
    const completeUrl: string = this.baseUrl + 'vehicles/schema';
    return this.getCall(completeUrl);
  }

  getStarshipSchema(): Observable<any> {
    const completeUrl: string = this.baseUrl + 'starships/schema';
    return this.getCall(completeUrl);
  }

  public getCall(url: string) {
    return this.http.get(url)
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError));
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error._body}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }
}
