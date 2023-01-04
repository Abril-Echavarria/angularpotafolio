import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeeditComponent } from './expeedit.component';

describe('ExpeeditComponent', () => {
  let component: ExpeeditComponent;
  let fixture: ComponentFixture<ExpeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
