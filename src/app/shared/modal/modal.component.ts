import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalService } from 'src/app/Services/modal.service';

import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
})
export class ModalComponent implements OnInit {
  isModalHiden: boolean;
  constructor(private el: ElementRef, public modalService: ModalService) {}
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('^[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{3}$'),
    ]),
  });

  onClick() {
    this.modalService.toggleModal();
    this.isModalHiden = this.modalService.isModalHiden;
  }

  contactMe() {
    this.modalService.addUser({
      name: this.form.controls.name.value,
      phoneNumber: this.form.controls.phone.value,
      email: this.form.controls.email.value,
      id: '',
    });

    this.onClick();
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
}
