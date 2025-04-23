import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFinacieroComponent } from './formulario-finaciero.component';

describe('FormularioFinacieroComponent', () => {
  let component: FormularioFinacieroComponent;
  let fixture: ComponentFixture<FormularioFinacieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFinacieroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFinacieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
