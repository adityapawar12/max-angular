import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    isRecipes: boolean = false;
    isShoppingList: boolean = false;
    loadedFeature: string = 'recipe';

    onNavigate(event: any) {
        this.loadedFeature = event;
    }
}
