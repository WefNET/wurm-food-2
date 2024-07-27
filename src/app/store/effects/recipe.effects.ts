// src/app/store/effects/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { fetchRecipes, fetchRecipesFailure, fetchRecipesSuccess } from '../actions/recipe.actions';
import { DataService } from '../../services/data.service';

@Injectable()
export class RecipeEffects {
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchRecipes),
            mergeMap(() =>
                this.dataService.getData().pipe(
                    map(recipes => fetchRecipesSuccess({ recipes })),
                    catchError(error => of(fetchRecipesFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private dataService: DataService) { }
}
