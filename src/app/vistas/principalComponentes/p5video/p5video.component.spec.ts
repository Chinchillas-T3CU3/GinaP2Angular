import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5videoComponent } from './p5video.component';

describe('P5videoComponent', () => {
  let component: P5videoComponent;
  let fixture: ComponentFixture<P5videoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P5videoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5videoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
