import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private discounts: any[] = ['Kir', 'KirBestTeacher', 'Guslan)'];

  constructor() {}

  public getDiscounts(): string[] {
    return this.discounts;
  }

  public getNewPriceWithDiscount(oldPrice: number){
    const priceWithDiscount = (oldPrice * 20) / 100;

    return oldPrice - priceWithDiscount;
  }
}
