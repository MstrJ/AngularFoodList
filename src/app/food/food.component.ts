import { Component } from '@angular/core';
import { Food } from '../food';
import { IFood } from '../IfoodCount';
import { listOfFoods } from '../food-compose';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  foods: Food[] = listOfFoods;
  shoppingListRaw: IFood[] = [];
  shoppingListUniqe: IFood[] = [];
  shoppingCart: number = 0;

  public Add(f: Food): void {
    let rawF: IFood = {
      Id: this._IdGenerator(),
      Name: f.Name,
      Price: f.Price,
      Count: 0,
    };
    this.shoppingListRaw.push(rawF);

    this._Prices();
    this._ShoppingUniqeList(this.shoppingListRaw);
  }

  public Remove(f: Food): void {
    let rawF: IFood = {
      Id: this._IdGenerator(),
      Name: f.Name,
      Price: f.Price,
      Count: this._CountsAction({ Name: f.Name, Price: f.Price }),
    };

    this.shoppingListRaw.forEach((element) => {
      if (element == f)
        this.shoppingListRaw.splice(this.shoppingListRaw.indexOf(element), 1);
    });
    this._Prices();
    this._ShoppingUniqeList(this.shoppingListRaw);

    console.log(f);
  }
  private _Prices(): void {
    let price: number = 0;
    this.shoppingListRaw.forEach((element) => {
      price += element.Price;
    });
    this.shoppingCart = Math.round(price * 100) / 100;

    this._ShoppingAction(this.shoppingListRaw);
  }

  private _ShoppingAction(fList: Food[]): void {
    let foodsList: IFood[] = [];
    fList.forEach((item) => {
      let food: IFood = {
        Id: this._IdGenerator(),
        Name: item.Name,
        Price: item.Price,
        Count: this._CountsAction(item),
      };
      foodsList.push(food);
    });

    this.shoppingListRaw = foodsList;
  }

  private _CountsAction(f: Food): number {
    let n: number = 0;
    this.shoppingListRaw.forEach((element) => {
      if (f.Name == element.Name) n++;
    });
    return n;
  }

  private _ShoppingUniqeList(fList: IFood[]): void {
    let list: IFood[] = [];

    fList.forEach((element) => {
      if (!list.some((x) => x.Name === element.Name)) {
        list.push(element);
      }
    });
    this.shoppingListUniqe = list;
  }
  private _IdGenerator(): number {
    return Math.random() * 10000;
  }
}

// "builder": "@angular-devkit/build-angular:dev-server",
// "builder": "docs",

// ng build --output-path docs --base-href products
