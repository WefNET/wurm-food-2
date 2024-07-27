// src/app/store/reducers/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { fetchRecipesSuccess, fetchRecipesFailure } from '../actions/recipe.actions';
import { Recipe } from '../../models/recipe.model';

export interface RecipeState {
    recipes: Recipe[];
    error: any;
}

export const initialState: RecipeState = {
    recipes: [],
    error: null
};

export const recipeReducer = createReducer(
    initialState,
    on(fetchRecipesSuccess, (state, { recipes }) => ({ ...state, recipes })),
    on(fetchRecipesFailure, (state, { error }) => ({ ...state, error }))
);
