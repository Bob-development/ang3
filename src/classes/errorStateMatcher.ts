import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { DiscountService } from '../app/services/discount.service';
import { ProductService } from '../app/services/product.service';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    public discountService: DiscountService;
    public productService: ProductService;
    
    constructor(discountService: DiscountService, productService: ProductService){
        this.discountService = discountService;
        this.productService = productService;
    }

    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {        
        if(control.value){
            const findEnteredDiscount = this.discountService.getDiscounts().find((el) => el === control.value);

            if(findEnteredDiscount){
                this.productService.assignNewProductProp('isSale', true);                
                return false;
                
            } else {
                this.productService.assignNewProductProp('isSale', false);
                return true;
            }
        }
    }
}
