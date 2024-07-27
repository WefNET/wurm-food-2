// src/app/components/user-table/user-table.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Recipe } from '../../models/recipe.model';
import { DataService } from '../../services/data.service';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RecipeExpandoComponent } from '../recipe-expando/recipe-expando.component';


@Component({
  selector: 'app-recipe-table',
  standalone: true,
  imports: [CommonModule, TableModule, InputTextModule, DropdownModule, FormsModule, ButtonModule, RecipeExpandoComponent],
  providers: [DataService],
  templateUrl: './recipe.table.html',
  styleUrls: ['./recipe-table.scss']
})
export class RecipeTableComponent implements OnInit {
  recipes: Recipe[] = [];

  skills = [
    {label: 'baking', value: 'baking'},
    {label: 'beverages', value: 'beverages'},
    {label: 'butchering', value: 'butchering'},
    {label: 'cooking', value: 'cooking'},
    {label: 'dairy food making', value: 'dairy food making'},
    {label: 'hot food cooking', value: 'hot food cooking'},
    {label: 'milling', value: 'milling'}
  ];
      
  constructor(
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: Recipe[]) => {
      console.log(data);

      this.recipes = data;
    });
  }

}
