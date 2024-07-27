import { Component, Input } from '@angular/core';
import { Oneof } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { TargetComponent } from '../target/target.component';

@Component({
  selector: 'app-oneof',
  standalone: true,
  imports: [CommonModule, TargetComponent],
  templateUrl: './oneof.component.html',
  styleUrl: './oneof.component.scss'
})
export class OneofComponent {
  @Input() oneof!: Oneof;
}
