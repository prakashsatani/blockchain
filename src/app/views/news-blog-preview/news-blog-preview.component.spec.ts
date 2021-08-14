import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlogPreviewComponent } from './news-blog-preview.component';

describe('NewsBlogPreviewComponent', () => {
  let component: NewsBlogPreviewComponent;
  let fixture: ComponentFixture<NewsBlogPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBlogPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlogPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
