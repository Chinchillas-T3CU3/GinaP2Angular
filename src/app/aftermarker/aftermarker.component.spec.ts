import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftermarkerComponent } from './aftermarker.component';

describe('AftermarkerComponent', () => {
  let component: AftermarkerComponent;
  let fixture: ComponentFixture<AftermarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AftermarkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftermarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
