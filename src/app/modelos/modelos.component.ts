import { Component } from '@angular/core';
import { GaleriaComponent } from '../vistas/galeria/galeria.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { UsadosComponent } from '../vistas/usados/usados.component';

@Component({
  selector: 'app-modelos',
  imports: [GaleriaComponent,UsadosComponent,HeaderComponent,NavbarComponent,FooterComponent],
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.css'
})
export class ModelosComponent {

}
