import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangecloneComponent } from './exchangeclone.component';

describe('ExchangecloneComponent', () => {
  let component: ExchangecloneComponent;
  let fixture: ComponentFixture<ExchangecloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangecloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangecloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
