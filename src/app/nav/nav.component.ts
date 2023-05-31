import { ChangeDetectionStrategy } from '@angular/core';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Projects } from '../model/projects.modal';
import { ProjectsService } from '../Services/projects.service';
import { ModalService } from '../Services/modal.service';
import { FireService } from '../Services/fire.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  @Input() burgerMenu = false;
  currentdropDown = false;
  completdropDown = false;
  completeProjects: Projects[];
  currentProjects: Projects[];

  constructor(
    private el: ElementRef,
    private modalService: ModalService,
    private fireService: FireService
  ) {
    this.fireService.getProjects<Projects>('projects').subscribe((res) => {
      this.completeProjects = res.filter((e) => e.status == 'Complete');
      this.currentProjects = res.filter((e) => e.status == 'In Progress');
    });
  }

  @HostListener('document:click', ['$event'])
  onclick(event: any) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.burgerMenu = false;
    }
  }

  openModal(event) {
    event.preventDefault();
    this.modalService.toggleModal();
  }

  burgerDropDown() {
    this.burgerMenu = !this.burgerMenu;
    this.currentdropDown = false;
    this.completdropDown = false;
  }

  currentClicked() {
    this.currentdropDown = !this.currentdropDown;
    this.completdropDown = false;
  }

  completClicked() {
    this.completdropDown = !this.completdropDown;
    this.currentdropDown = false;
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}
