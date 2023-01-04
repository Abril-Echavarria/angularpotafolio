import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioeditComponent } from './estudioedit.component';

describe('EstudioeditComponent', () => {
  let component: EstudioeditComponent;
  let fixture: ComponentFixture<EstudioeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
