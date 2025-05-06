import { Component } from '@angular/core';
import { HeaderComponent } from '../vistas/header/header.component';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { P1Component } from '../vistas/principalComponentes/p1/p1.component';
import { E1Component } from '../vistas/aftermarker/e1/e1.component';
import { E2Component } from '../vistas/aftermarker/e2/e2.component';
import { E3Component } from '../vistas/aftermarker/e3/e3.component';


@Component({
  selector: 'app-aftermarker',
  imports: [HeaderComponent,NavbarComponent,FooterComponent,E1Component,E2Component,E3Component],
  templateUrl: './aftermarker.component.html',
  styleUrl: './aftermarker.component.css'
})
export class AftermarkerComponent {

}
