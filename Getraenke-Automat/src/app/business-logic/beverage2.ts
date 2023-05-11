import { BeverageInterface } from './beverage-interface';

export class Beverage2 {
  public beverage: BeverageInterface = {
    name: ''
  };
  constructor() {}

  newBeverage(name: string){
    this.beverage = {
      name: name
    }
    return this.beverage
  }
}
