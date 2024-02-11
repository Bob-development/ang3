import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})

export class FormComponent {
  public isSaleActive: boolean = false;

  constructor(
    public productService: ProductService
  ){}

  public range = new FormGroup({
    from: new FormControl<Date | null>(null),
    to: new FormControl<Date | null>(null),
  });

  public createData(form: any){
    const firstDate = this.range.get('from').value ? `${this.range.get('from').value}`.split(' ') : null;
    const lastDate = this.range.get('to').value ? `${this.range.get('to').value}`.split(' ') : null;    
    
    if(
      form.label.length > 0 &&
      form.price.length !== '' &&
      form.description.length > 0 &&
      firstDate !== null &&
      lastDate !== null
      ){        
        this.productService.assignNewProductProp('label', form.label);
        this.productService.assignNewProductProp('price', +form.price);
        this.productService.assignNewProductProp('description', form.description);
        this.productService.assignNewProductProp('dateFrom', `${this.transformDate(firstDate)}`);
        this.productService.assignNewProductProp('dateTo', `${this.transformDate(lastDate)}`);

        this.productService.addProduct();
      }
  }

  public toogleDiscountInput(){
    this.isSaleActive = !this.isSaleActive;
    this.productService.assignNewProductProp('isSale', false);
  }

  public transformDate(date: string[]){
    return date.filter((el) => date.indexOf(el) >= 1 && date.indexOf(el) < 4).join('/');
  }
}
