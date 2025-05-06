import { Component } from '@angular/core';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { P1Component } from '../vistas/principalComponentes/p1/p1.component';
import { P2Component } from '../vistas/principalComponentes/p2/p2.component';
import { P3Component } from '../vistas/principalComponentes/p3/p3.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { P0Component } from '../vistas/principalComponentes/p0/p0.component';

@Component({
  selector: 'app-principal',
  imports: [NavbarComponent,HeaderComponent,P1Component,P2Component,P3Component,FooterComponent,P0Component],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
