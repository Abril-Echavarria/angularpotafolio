import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremidbComponent } from './sobremidb.component';

describe('SobremidbComponent', () => {
  let component: SobremidbComponent;
  let fixture: ComponentFixture<SobremidbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremidbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremidbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
