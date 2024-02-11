import { Component } from '@angular/core';
import { DiscountService } from '../../services/discount.service';

import { CustomErrorStateMatcher } from "../../../classes/errorStateMatcher";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.css'
})

export class DiscountComponent {
  public inputValue: string = '';
  public matcher: CustomErrorStateMatcher = new CustomErrorStateMatcher(this.discountService, this.productService);

  constructor(
    public discountService: DiscountService,
    public productService: ProductService,
  ){}

}
