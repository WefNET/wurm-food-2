import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeTableComponent } from "./components/recipe-table/recipe.table";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, RecipeTableComponent]
})
export class AppComponent {
  title = 'wurm-food-2';
}
