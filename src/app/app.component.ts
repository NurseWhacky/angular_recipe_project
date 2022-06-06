import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe_project';
  selectedLink = 'recipe-book';
  // selectedLink = '';


  //ALTERNATIVA
  onSelection(selection: string) {
    this.selectedLink = selection;
  }
}
