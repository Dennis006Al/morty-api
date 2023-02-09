import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  Character,
  Locations,
} from '../components/interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacter(query = '', page = 1) {
    const filter = `${environment.baseURL}/character/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseURL}character/${id}`);
  }

  getLocations(page = 1) {
    return this.http.get<Locations[]>(`${environment.baseURL}location?page=${page}`);
  }
}
