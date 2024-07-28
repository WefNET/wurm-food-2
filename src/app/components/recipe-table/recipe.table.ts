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
import { FilterService } from 'primeng/api';

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

  globalFilter: string = '';


      
  constructor(
    private dataService: DataService,
    private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: Recipe[]) => {
      console.log(data);

      this.recipes = data;
    });
  }

  containsValue(obj: any, searchString: string): boolean {
    if (typeof obj === 'string') {
      return obj.toLowerCase().includes(searchString.toLowerCase());
    }
  
    if (Array.isArray(obj)) {
      return obj.some(item => this.containsValue(item, searchString));
    }
  
    if (typeof obj === 'object' && obj !== null) {
      return Object.values(obj).some(value => this.containsValue(value, searchString));
    }
  
    return false;
  }


  filterData() {
    return this.recipes.filter(recipe => 
      this.containsValue(recipe.ingredients, this.globalFilter)
    );
  }

  

}
