import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeServiceService } from '../recipe.service.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selected: Boolean = false;
  selectedRecipe: Recipe | null = null;

  constructor( private recipeService : RecipeServiceService) {}

  getRecipes(): void {
    this.recipeService.getRecipe().subscribe((recipes) => (this.recipes = recipes));
  }

  ngOnInit() {
    this.getRecipes();
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selected = true;
  }
}
