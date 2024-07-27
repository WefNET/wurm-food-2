import { Component, Input } from '@angular/core';
import { Pstate, Target } from '../../models/recipe.model';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
})
export class TargetComponent {
  @Input() target!: Target;
}
