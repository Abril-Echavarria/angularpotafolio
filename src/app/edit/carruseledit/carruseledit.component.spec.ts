import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruseleditComponent } from './carruseledit.component';

describe('CarruseleditComponent', () => {
  let component: CarruseleditComponent;
  let fixture: ComponentFixture<CarruseleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruseleditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruseleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
