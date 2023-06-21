import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class InputComponent {
  @Input() controlName: FormControl;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() label: string;
  @Input() errorMessage: string;
}
