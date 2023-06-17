import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSelectionComponent } from './house-selection.component';

describe('HouseSelectionComponent', () => {
  let component: HouseSelectionComponent;
  let fixture: ComponentFixture<HouseSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
