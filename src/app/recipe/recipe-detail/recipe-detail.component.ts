import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe.service.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;

  constructor( private recipeService : RecipeServiceService) {}

  getRecipeById(): void {
    this.recipeService.getRecipeById().subscribe((recipe) => (this.recipe = recipe));
  }

  ngOnInit(): void {
    this.getRecipeById();
  }
}
