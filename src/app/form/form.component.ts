import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})

export class FormComponent {
  constructor(){}

  public range = new FormGroup({
    from: new FormControl<Date | null>(null),
    to: new FormControl<Date | null>(null),
  });

  public getFormData(form: any){
    console.log(this.range.get('from').value);

    form['from'] = `${this.range.get('from').value}`;
    form['to'] = `${this.range.get('to').value}`;
    
    console.log(form);
    
  }
}
