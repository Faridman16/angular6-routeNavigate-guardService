import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Hero } from './heroModel';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  serverUrl = 'http://localhost:3000/angular';

  constructor(private http: HttpClient, private message: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.message.add('HerroService: fetched hero');
    return this.http.get<Hero[]>(`${this.serverUrl}/heroes`);
  }

  getHero(id: number): Observable<Hero> {
    this.message.add('HerroService: get hero with id : ' + id);
    return this.http.get<Hero>(`${this.serverUrl}/heroes/${id}`);
  }

}
