import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe.service.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;

  constructor( private recipeService : RecipeServiceService, private route: ActivatedRoute) {}

  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipeById(id).subscribe((data) => {
      this.recipe = data;
    });
  }

  ingredienteMasUsado(recipe: Recipe): String {
    let nombre = "";
    let max = 0;  

   

    for (let index = 0; index < recipe.ingredientes.length; index++) {
      
      if(Number(recipe.ingredientes[index].cantidad) > max) {

        nombre = recipe.ingredientes[index].nombre;
        max = Number(recipe.ingredientes[index].cantidad)
      }
            
    }
    

    return nombre;
  }

}
