import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredients } from '../../models/recipe.model';
import { TargetComponent } from '../target/target.component';
import { OneofComponent } from '../oneof/oneof.component';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [CommonModule, TargetComponent, OneofComponent],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent {
  @Input() ingredients!: Ingredients;
}
