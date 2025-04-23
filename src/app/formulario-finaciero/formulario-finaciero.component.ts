import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-finaciero',
  standalone:true,
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,
    MatCheckboxModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule],
  templateUrl: './formulario-finaciero.component.html',
  styleUrl: './formulario-finaciero.component.css'
})
export class FormularioFinacieroComponent {
  formulario: FormGroup;
  bancos = ['BBVA', 'Santander', 'Banorte', 'HSBC'];
  mensualidades = ['12 meses', '24 meses', '36 meses'];
  hoy: string;

  constructor(private fb: FormBuilder) {
    const fechaHoy = new Date();
    this.hoy = fechaHoy.toISOString().split('T')[0];

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      banco: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1000)]],
      pago: ['', Validators.required],
      tipo: ['', Validators.required],
      fecha: ['', [Validators.required, this.validarFecha.bind(this)]],
      terminos: [false, Validators.requiredTrue],
    });
  }

  get nombre() { return this.formulario.get('nombre')!; }
  get correo() { return this.formulario.get('correo')!; }
  get banco() { return this.formulario.get('banco')!; }
  get cantidad() { return this.formulario.get('cantidad')!; }
  get pago() { return this.formulario.get('pago')!; }
  get tipo() { return this.formulario.get('tipo')!; }
  get fecha() { return this.formulario.get('fecha')!; }
  get terminos() { return this.formulario.get('terminos')!; }

  validarFecha(control: AbstractControl) {
    if (!control.value) return null;
    const fechaSeleccionada = new Date(control.value);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return fechaSeleccionada >= hoy ? null : { fechaInvalida: true };
  }

  onSubmit() {
    if (this.formulario.valid) {
      Swal.fire({
        title: "Exito",
        text: "Prestamo realizado con exito",
        icon: "success"
      });
      const prestamos = JSON.parse(localStorage.getItem('prestamos') || '[]');
      prestamos.push(this.formulario.value);
      localStorage.setItem('prestamos', JSON.stringify(prestamos));
      this.formulario.reset();
    }
  }
}
