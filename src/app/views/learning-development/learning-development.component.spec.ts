import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDevelopmentComponent } from './learning-development.component';

describe('LearningDevelopmentComponent', () => {
  let component: LearningDevelopmentComponent;
  let fixture: ComponentFixture<LearningDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
