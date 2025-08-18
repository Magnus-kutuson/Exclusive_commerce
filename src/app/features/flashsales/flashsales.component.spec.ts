import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashsalesComponent } from './flashsales.component';

describe('FlashsalesComponent', () => {
  let component: FlashsalesComponent;
  let fixture: ComponentFixture<FlashsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashsalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
