import { Component, Input } from '@angular/core';
import { Result } from '../../models/recipe.model';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  @Input() result!: Result;
}
