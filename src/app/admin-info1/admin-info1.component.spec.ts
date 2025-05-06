import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfo1Component } from './admin-info1.component';

describe('AdminInfo1Component', () => {
  let component: AdminInfo1Component;
  let fixture: ComponentFixture<AdminInfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInfo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
