import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasRutasComponent } from './vistas-rutas.component';

describe('VistasRutasComponent', () => {
  let component: VistasRutasComponent;
  let fixture: ComponentFixture<VistasRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistasRutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistasRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
