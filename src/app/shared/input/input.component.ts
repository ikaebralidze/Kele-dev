import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() controlName: FormControl;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() label: string;
  @Input() errorMessage: string;


}
