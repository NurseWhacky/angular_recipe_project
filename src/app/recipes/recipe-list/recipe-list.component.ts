import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'A delicious pie like the ones your grams used to make!', 'https://i0.wp.com/longdistancebaking.com/wp-content/uploads/2014/09/DSC09821.jpg'),
    new Recipe('Ass Pie', 'A delicious pie like the ones your Hans used to make!', 'https://i0.wp.com/longdistancebaking.com/wp-content/uploads/2014/09/DSC09821.jpg'),
    new Recipe('Apfel Pie', 'A delicious pie like the ones Karlheinz used to make!', 'https://i0.wp.com/longdistancebaking.com/wp-content/uploads/2014/09/DSC09821.jpg'),
    new Recipe('Anome Pie', 'A delicious pie like the ones your [???] used to make!', 'https://i0.wp.com/longdistancebaking.com/wp-content/uploads/2014/09/DSC09821.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
