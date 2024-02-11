import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  public panelOpenState: boolean = false;

  constructor(
    public productService: ProductService,
    public discountService: DiscountService
  ){}


}
