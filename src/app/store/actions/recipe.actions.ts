// src/app/store/actions/user.actions.ts
import { createAction, props } from '@ngrx/store';
import { Recipe } from '../../models/recipe.model';

export const fetchRecipes = createAction('[Recipes] Load All Recipes');
export const fetchRecipesSuccess = createAction('[Recipes] Load All Recipes Success', props<{ recipes: Recipe[] }>());
export const fetchRecipesFailure = createAction('[Recipes] Load All Recipes Failure', props<{ error: any }>());
