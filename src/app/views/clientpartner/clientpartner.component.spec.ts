import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientpartnerComponent } from './clientpartner.component';

describe('ClientpartnerComponent', () => {
  let component: ClientpartnerComponent;
  let fixture: ComponentFixture<ClientpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
