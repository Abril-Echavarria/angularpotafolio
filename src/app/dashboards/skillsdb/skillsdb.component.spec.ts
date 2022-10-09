import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsdbComponent } from './skillsdb.component';

describe('SkillsdbComponent', () => {
  let component: SkillsdbComponent;
  let fixture: ComponentFixture<SkillsdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
