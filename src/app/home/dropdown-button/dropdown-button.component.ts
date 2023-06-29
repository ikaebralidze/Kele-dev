import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IData } from '../../model/projects.modal';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css'],

  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownButtonComponent implements OnInit {
  @Input() data: IData;
  @Input() form = new FormControl('', [Validators.required]);

  selectedValue: string;
  prevValue: string;
  screenWidth: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.renderer.removeClass(
        this.el.nativeElement.querySelector('.select'),
        'is-small'
      );
    } else {
      this.renderer.addClass(
        this.el.nativeElement.querySelector('.select'),
        'is-small'
      );
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.renderer.removeClass(
        this.el.nativeElement.querySelector('.select'),
        'is-small'
      );
    }
  }
}
