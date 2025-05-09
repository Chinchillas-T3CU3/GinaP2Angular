import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import Swal from 'sweetalert2';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { FooterComponent } from '../vistas/footer/footer.component';

@Component({
  selector: 'app-formulario-manejo',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,
            MatCheckboxModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule
          ,MatTableModule,MatIconModule,CommonModule,NavbarComponent,HeaderComponent,FooterComponent ],
  templateUrl: './formulario-manejo.component.html',
  styleUrl: './formulario-manejo.component.css'
})
export class FormularioManejoComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  
  prueba = {
    nombre: '',
    correo: '',
    autoAProbar: '',
    fecha: '',
    transmision: ''  
  };
  citas:any[]=[];
  crupaAutos = ['Formentor', 'León', 'Born', 'Tavascan', 'Terramar','Ateca'];
  columnas: string[] = ['nombre', 'correo', 'autoAProbar', 'fecha', 'transmision', 'editar', 'eliminar'];
  editando: boolean = false;
  indexEditando: number | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.citas=this.cargarCitas();
    }
  }
  cargarCitas(): any[] {
    return JSON.parse(localStorage.getItem('pruebasManejo') || '[]');
  }

  guardarCitas() {
    localStorage.setItem('pruebasManejo', JSON.stringify(this.citas));
  }

  onSubmit() {
    if (this.editando && this.indexEditando !== null) {
      // Modo edición
      this.citas[this.indexEditando] = { ...this.prueba };
      this.editando = false;
      this.indexEditando = null;
    } else {
      // Nuevo registro
      this.citas.push({ ...this.prueba });
    }

    this.guardarCitas();

    Swal.fire({
      title: "Éxito",
      text: this.editando ? "Cita editada correctamente" : "Prueba agendada con éxito",
      icon: "success"
    });

    this.prueba = {
      nombre: '',
      correo: '',
      autoAProbar: '',
      fecha: '',
      transmision: ''
    };

    this.citas = this.cargarCitas(); // Recargar la lista desde localStorage
  }

  editarCita(index: number) {
    const cita = this.citas[index];
    this.prueba = { ...cita };
    this.editando = true;
    this.indexEditando = index;
  }

  eliminarCita(index: number) {
    this.citas.splice(index, 1);
    this.guardarCitas();

    Swal.fire({
      title: "Éxito",
      text: "Registro eliminado",
      icon: "success"
    });

    this.citas = this.cargarCitas();
  }
  filtrarFechas = (d: Date | null): boolean => {
    const hoy = new Date();
    return d ? d >= hoy : false;
  };
}
