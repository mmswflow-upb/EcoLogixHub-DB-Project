//Importing Modules:
import { Component , OnChanges,Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'checkbox-field',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.css'
})
export class CheckboxFieldComponent implements OnChanges{

  @Input()  checkboxValue : any  = '0';
  @Input() disabled : boolean = false;

  @Output() checkboxValueChange = new EventEmitter<string>();

  updateCheckbox(event : any) {


    this.checkboxValueChange.emit(event.target.checked === true ? '1' : '0');


  }

  ngOnChanges(changes : any){


    if (changes.disabled){
      this.disabled = changes.disabled.currentValue;
    }
    if(changes.checkboxValue){
      this.checkboxValue = changes.checkboxValue.currentValue === '1' ? 'checked' : null;
    }
  }

}
