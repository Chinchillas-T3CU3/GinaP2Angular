import { Component } from '@angular/core';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { Servicio2Component } from '../vistas/pstventa/servicio2/servicio2.component';
import { Servicio3Component } from '../vistas/pstventa/servicio3/servicio3.component';
import { Servicio1Component } from '../vistas/pstventa/servicio1/servicio1.component';

@Component({
  selector: 'app-mantenimientos',
  imports: [NavbarComponent,FooterComponent,HeaderComponent,Servicio1Component,Servicio2Component,Servicio3Component],
  templateUrl: './mantenimientos.component.html',
  styleUrl: './mantenimientos.component.css'
})
export class MantenimientosComponent {

}
