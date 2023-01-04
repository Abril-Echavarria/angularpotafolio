import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeceditComponent } from './proyecedit.component';

describe('ProyeceditComponent', () => {
  let component: ProyeceditComponent;
  let fixture: ComponentFixture<ProyeceditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyeceditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyeceditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
