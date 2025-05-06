import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac1Component } from './ac1.component';

describe('Ac1Component', () => {
  let component: Ac1Component;
  let fixture: ComponentFixture<Ac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ac1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
