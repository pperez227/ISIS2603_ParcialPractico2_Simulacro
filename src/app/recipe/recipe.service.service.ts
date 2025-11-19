import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private apiUrl = environment.recipeUrl;

  constructor(private http: HttpClient) { }

  getRecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl + "/recipe.json");
  }

  getRecipeById(): Observable<Recipe> {
    return this.http.get<Recipe>(this.apiUrl+ "/1/recipe.json");
  }


}
