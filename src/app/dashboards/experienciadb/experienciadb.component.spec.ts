import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciadbComponent } from './experienciadb.component';

describe('ExperienciadbComponent', () => {
  let component: ExperienciadbComponent;
  let fixture: ComponentFixture<ExperienciadbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciadbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciadbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
