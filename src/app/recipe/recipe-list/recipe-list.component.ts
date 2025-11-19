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
  

  constructor( private recipeService : RecipeServiceService) {}

  

  ngOnInit() {
    this.recipeService.getRecipe().subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }

  trackById(index: number, recipe: Recipe): number {
    return recipe.id;
  }

  calcularIngredientes(recipe: Recipe): number{
    return recipe.ingredientes.length
  }
  
}
