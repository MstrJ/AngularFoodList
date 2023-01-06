import { Component } from '@angular/core';
import { Food } from '../food';
import { IfoodCounts } from '../IfoodCount';
import { listOfFoods } from '../food-compose';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  foods: Food[] = listOfFoods;
  listFood: Food[] = [];

  cena: number = 0;
  public Add(f: Food): void {
    // let n: number = this._CountAdded(f);
    // let rawF: IfoodCounts = {
    //   Name: f.Name,
    //   Price: f.Price,
    //   Count: 0,
    // };
    this.listFood.push(f);
    this.cena += f.Price;
  }
  // private _CountAdded(f: Food): number {
  //   let n: number = 0;
  //   this.listFood.forEach((element) => {
  //     if (f.Name == element.Name) n++;
  //   });
  //   return n;
  // }
  public Remove(f: Food): void {
    // let rawF: IfoodCounts = { Name: f.Name, Price: f.Price, Count: 0 };
    this.listFood.splice(this.listFood.indexOf(f), 1);
    this._Prices();
  }
  private _Prices(): void {
    let price: number = 0;
    this.listFood.forEach((element) => {
      price += element.Price;
    });
    this.cena = price;
  }
}

// "builder": "@angular-devkit/build-angular:dev-server",
// "builder": "docs",
