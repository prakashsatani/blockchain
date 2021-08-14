import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniswapCloneComponent } from './uniswap-clone.component';

describe('UniswapCloneComponent', () => {
  let component: UniswapCloneComponent;
  let fixture: ComponentFixture<UniswapCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniswapCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniswapCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
