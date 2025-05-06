import { Component } from '@angular/core';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { Ac1Component } from '../vistas/clienteate/ac1/ac1.component';
import { Ac2Component } from '../vistas/clienteate/ac2/ac2.component';

@Component({
  selector: 'app-sercliente',
  imports: [NavbarComponent,HeaderComponent,FooterComponent,Ac1Component,Ac2Component],
  templateUrl: './sercliente.component.html',
  styleUrl: './sercliente.component.css'
})
export class SerclienteComponent {

}
