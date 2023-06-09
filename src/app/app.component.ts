import { Component } from '@angular/core';

import { ModalService } from './Services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kele-dev';
  burgerMenu = false;
  constructor(public modalService: ModalService) {}
}
