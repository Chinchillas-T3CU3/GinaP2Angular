import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1MenuComponent } from './admin1-menu.component';

describe('Admin1MenuComponent', () => {
  let component: Admin1MenuComponent;
  let fixture: ComponentFixture<Admin1MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin1MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin1MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
