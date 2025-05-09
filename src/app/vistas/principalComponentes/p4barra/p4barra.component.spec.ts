import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4barraComponent } from './p4barra.component';

describe('P4barraComponent', () => {
  let component: P4barraComponent;
  let fixture: ComponentFixture<P4barraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P4barraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4barraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
