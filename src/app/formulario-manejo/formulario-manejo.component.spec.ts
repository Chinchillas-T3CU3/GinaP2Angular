import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioManejoComponent } from './formulario-manejo.component';

describe('FormularioManejoComponent', () => {
  let component: FormularioManejoComponent;
  let fixture: ComponentFixture<FormularioManejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioManejoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioManejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
