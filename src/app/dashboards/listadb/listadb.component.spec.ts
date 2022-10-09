import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadbComponent } from './listadb.component';

describe('ListadbComponent', () => {
  let component: ListadbComponent;
  let fixture: ComponentFixture<ListadbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
