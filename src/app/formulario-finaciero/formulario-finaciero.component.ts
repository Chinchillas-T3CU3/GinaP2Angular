import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { HeaderComponent } from '../vistas/header/header.component';

@Component({
  selector: 'app-formulario-finaciero',
  standalone:true,
  imports: [ReactiveFormsModule,NavbarComponent,FooterComponent,HeaderComponent, MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,
    MatCheckboxModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,CommonModule,MatTableModule,CommonModule,MatIconModule ],
  templateUrl: './formulario-finaciero.component.html',
  styleUrl: './formulario-finaciero.component.css'
})
export class FormularioFinacieroComponent {
  formulario: FormGroup;
  bancos = ['BBVA', 'Santander', 'Banorte', 'HSBC'];
  mensualidades = ['12 meses', '24 meses', '36 meses'];
  hoy: string;
  prestamos: any[] = [];
  columnas: string[] = ['nombre', 'correo', 'banco', 'cantidad', 'pago', 'tipo', 'fecha', 'editar', 'eliminar'];
  editando:boolean=false;


  constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object) {
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


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.prestamos=this.cargarPrestamos();
    }
  }

  cargarPrestamos(): any[] {
    return JSON.parse(localStorage.getItem('prestamos') || '[]');
  }

  validarFecha(control: AbstractControl) {
    if (!control.value) return null;
    const fechaSeleccionada = new Date(control.value);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return fechaSeleccionada >= hoy ? null : { fechaInvalida: true };
  }

  onSubmit() {
    if(this.formulario.valid&& this.editando){
      var prestamos:any=[];
       prestamos = this.cargarPrestamos();
      var index=prestamos.findIndex((prestamo: { nombre: any; })=>prestamo.nombre==this.formulario.value.nombre);
      if (index !== -1) {
        prestamos[index] = this.formulario.value;
        localStorage.setItem('prestamos', JSON.stringify(prestamos));
        Swal.fire({
          title: "Éxito",
          text: "Préstamo actualizado con éxito",
          icon: "success"
        });
        this.prestamos=this.cargarPrestamos();
        this.formulario.reset(); // Resetea el formulario
      }
    }
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
      this.prestamos=this.cargarPrestamos();
    }
  }

  editarPrestamo(index: number){
    const prestamo = this.prestamos[index];
    console.log(prestamo);
    this.formulario.patchValue(prestamo);
    this.editando=true;
  }

  
  eliminarPrestamo(index: number) {
    this.prestamos.splice(index, 1);
    localStorage.setItem('prestamos', JSON.stringify(this.prestamos));
    Swal.fire({
          title: "Exito",
          text: "Registro eliminado",
          icon: "success"
        });
    this.cargarPrestamos();
  }
}
