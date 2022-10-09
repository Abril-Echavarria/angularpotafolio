import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosdbComponent } from './estudiosdb.component';

describe('EstudiosdbComponent', () => {
  let component: EstudiosdbComponent;
  let fixture: ComponentFixture<EstudiosdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
