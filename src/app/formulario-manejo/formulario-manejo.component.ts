import { Component } from '@angular/core';
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

@Component({
  selector: 'app-formulario-manejo',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,
            MatCheckboxModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule],
  templateUrl: './formulario-manejo.component.html',
  styleUrl: './formulario-manejo.component.css'
})
export class FormularioManejoComponent {
  prueba = {
    nombre: '',
    correo: '',
    autoAProbar: '',
    fecha: '',
    transmision: ''  
  };

  crupaAutos = ['Formentor', 'León', 'Born', 'Tavascan', 'Terramar','Ateca'];

  onSubmit() {
    const almacenados = JSON.parse(localStorage.getItem('pruebasManejo') || '[]');
    almacenados.push(this.prueba);
    localStorage.setItem('pruebasManejo', JSON.stringify(almacenados));
    Swal.fire({
      title: "Exito",
      text: "Prueba agendada con exito",
      icon: "success"
    });


  }

  filtrarFechas = (d: Date | null): boolean => {
    const hoy = new Date();
    return d ? d >= hoy : false;
  };
}
