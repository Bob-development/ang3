import { Component } from '@angular/core';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.css'
})
export class DiscountComponent {
  public inputValue: string = '';

  constructor(
    public discountService: DiscountService
  ){}

  
}
