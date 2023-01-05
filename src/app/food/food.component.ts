import { Component } from '@angular/core';
import { Food } from '../food';
import { listOfFoods } from '../food-compose';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  foods: Food[] = listOfFoods;
}

// "builder": "@angular-devkit/build-angular:dev-server",
