import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})

export class FormComponent {
  public isSale: boolean = false;

  constructor(){}

  public range = new FormGroup({
    from: new FormControl<Date | null>(null),
    to: new FormControl<Date | null>(null),
  });

  public createData(form: any){
    const firstDate = `${this.range.get('from').value}`.split(' ');
    const lastDate = `${this.range.get('to').value}`.split(' ');

    form['dateFrom'] = this.transformDate(firstDate);
    form['dateTo'] = this.transformDate(lastDate);

    console.log(form);
  }

  public toogleDiscountInput(){
    this.isSale = !this.isSale;
  }

  public transformDate(date: string[]){
    return date.filter((el) => date.indexOf(el) >= 1 && date.indexOf(el) < 4).join('/');
  }
}
