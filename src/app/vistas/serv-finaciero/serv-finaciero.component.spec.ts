import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServFinacieroComponent } from './serv-finaciero.component';

describe('ServFinacieroComponent', () => {
  let component: ServFinacieroComponent;
  let fixture: ComponentFixture<ServFinacieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServFinacieroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServFinacieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
