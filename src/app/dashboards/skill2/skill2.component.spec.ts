import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skill2Component } from './skill2.component';

describe('Skill2Component', () => {
  let component: Skill2Component;
  let fixture: ComponentFixture<Skill2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Skill2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skill2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
