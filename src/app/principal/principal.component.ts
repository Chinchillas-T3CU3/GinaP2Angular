import { Component } from '@angular/core';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { P1Component } from '../vistas/principalComponentes/p1/p1.component';
import { P2Component } from '../vistas/principalComponentes/p2/p2.component';
import { P3Component } from '../vistas/principalComponentes/p3/p3.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { P0Component } from '../vistas/principalComponentes/p0/p0.component';
import { P4barraComponent } from "../vistas/principalComponentes/p4barra/p4barra.component";
import { P5videoComponent } from "../vistas/principalComponentes/p5video/p5video.component";

@Component({
  selector: 'app-principal',
  imports: [NavbarComponent, HeaderComponent, P1Component, P2Component, P3Component, FooterComponent, P0Component, P4barraComponent, P5videoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  autoSeleccionado!: string;

  actualizarAuto(auto: string) {
    this.autoSeleccionado = auto;
  }
}
