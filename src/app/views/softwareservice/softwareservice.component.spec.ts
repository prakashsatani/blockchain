import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareserviceComponent } from './softwareservice.component';

describe('SoftwareserviceComponent', () => {
  let component: SoftwareserviceComponent;
  let fixture: ComponentFixture<SoftwareserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
