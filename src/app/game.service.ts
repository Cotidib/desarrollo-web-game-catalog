import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from './game';
import { Details } from './details';
import { Servergame } from './servergame';
import { Servergames } from './servergames';
import { Serverdetails } from './serverdetails';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor(private http: HttpClient,) { }

  private gamesUrl = 'https://api.rawg.io/api/games';
  private gamesApiKey = '80fa3c4695d04f74846ad5cdd0cc3d37';
  private options =  new HttpParams().set('key', this.gamesApiKey);
  private page_size = 12;

  getGames(): Observable<Game[]>{
    const getOptions = this.options.set('page_size', this.page_size);
    return this.http.get<Servergames>(this.gamesUrl, {params: getOptions}).pipe(
      map((o: any) => o.results.map((gm: Servergame) => ({
        id: gm.id,
        name: gm.name,
        img: gm.short_screenshots[0].image
      })))
    );
  }

  getGame(id: number): Observable<Details>{
    const gameUrlId = `${this.gamesUrl}/${id}`
    return this.http.get<Serverdetails>(gameUrlId, {params: this.options}).pipe(
      map((o: any) => ({
        id: o.id,
        name: o.name,
        description: o.description,
        img: o.background_image
      }))
    );
  }

  searchGame(term: string): Observable<Game[]> {
    // term = term.trim();
    const searchOptions = this.options.set('search', term).set('page_size', this.page_size);
    return this.http.get<Servergame[]>(this.gamesUrl, {params: searchOptions}).pipe(
      map((o: any) => o.results.map((gm: Game) => ({
        id: gm.id,
        name: gm.name
      })))
    );
  }

}
