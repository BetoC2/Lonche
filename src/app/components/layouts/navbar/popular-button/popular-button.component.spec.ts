import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularButtonComponent } from './popular-button.component';

describe('PopularButtonComponent', () => {
  let component: PopularButtonComponent;
  let fixture: ComponentFixture<PopularButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
