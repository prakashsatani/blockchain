import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficloneComponent } from './deficlone.component';

describe('DeficloneComponent', () => {
  let component: DeficloneComponent;
  let fixture: ComponentFixture<DeficloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeficloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
