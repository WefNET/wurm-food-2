import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ResultComponent } from '../result/result.component';
import { CommonModule } from '@angular/common';
import { IngredientsListComponent } from '../ingredients-list/ingredients-list.component';

@Component({
  selector: 'app-recipe-expando',
  standalone: true,
  imports: [CommonModule, ResultComponent, IngredientsListComponent],
  templateUrl: './recipe-expando.component.html',
  styleUrl: './recipe-expando.component.scss'
})
export class RecipeExpandoComponent {
  @Input() recipe!: Recipe;

  constructor() {
  }

  showRecipe(recipe: Recipe): void {  
    console.log(recipe);
  }

}
