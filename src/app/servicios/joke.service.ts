import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBroma } from '../modelos/broma.interface';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(tipoBroma: string='Any', cantidadBromas: number=1): Observable<IBroma> {
    return this.http.get<IBroma>(`https://v2.jokeapi.dev/joke/Any?type=${tipoBroma}&count=${cantidadBromas}&lang=es`);
  }
}
