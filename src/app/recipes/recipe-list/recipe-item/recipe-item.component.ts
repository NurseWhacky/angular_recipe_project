import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //Angular 12+ forces strict mode, hence the '!' after uninitialized property name
  @Input('singleRecipe') recipe!: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.selectedRecipe.emit();
  }

}
