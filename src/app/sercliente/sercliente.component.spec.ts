import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerclienteComponent } from './sercliente.component';

describe('SerclienteComponent', () => {
  let component: SerclienteComponent;
  let fixture: ComponentFixture<SerclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
