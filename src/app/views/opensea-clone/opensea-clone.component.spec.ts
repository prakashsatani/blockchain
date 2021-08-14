import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenseaCloneComponent } from './opensea-clone.component';

describe('OpenseaCloneComponent', () => {
  let component: OpenseaCloneComponent;
  let fixture: ComponentFixture<OpenseaCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenseaCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenseaCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
