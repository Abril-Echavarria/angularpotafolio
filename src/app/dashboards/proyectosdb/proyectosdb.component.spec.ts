import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosdbComponent } from './proyectosdb.component';

describe('ProyectosdbComponent', () => {
  let component: ProyectosdbComponent;
  let fixture: ComponentFixture<ProyectosdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
