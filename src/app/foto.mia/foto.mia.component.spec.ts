import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoMiaComponent } from './foto.mia.component';

describe('FotoMiaComponent', () => {
  let component: FotoMiaComponent;
  let fixture: ComponentFixture<FotoMiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoMiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoMiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
