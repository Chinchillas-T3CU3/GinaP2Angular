import { Component } from '@angular/core';
import { HeaderComponent } from '../vistas/header/header.component';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { G1Component } from '../vistas/garantias/g1/g1.component';
import { G2Component } from '../vistas/garantias/g2/g2.component';
import { P3Component } from '../vistas/principalComponentes/p3/p3.component';
import { SegurosComponent } from '../vistas/garantias/seguros/seguros.component';

@Component({
  selector: 'app-garantias',
  imports: [HeaderComponent,NavbarComponent,FooterComponent,G1Component,G2Component,P3Component,SegurosComponent],
  templateUrl: './garantias.component.html',
  styleUrl: './garantias.component.css'
})
export class GarantiasComponent {

}
