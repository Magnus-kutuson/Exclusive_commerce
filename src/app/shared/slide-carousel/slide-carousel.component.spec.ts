import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCarouselComponent } from './slide-carousel.component';

describe('SlideCarouselComponent', () => {
  let component: SlideCarouselComponent;
  let fixture: ComponentFixture<SlideCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
