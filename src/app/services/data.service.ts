// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'recipes.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.jsonUrl);
  }
}
