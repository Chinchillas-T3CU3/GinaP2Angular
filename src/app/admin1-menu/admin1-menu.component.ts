import { Component } from '@angular/core';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { Admin1Component } from '../vistas/admin1/admin1.component';
import { FooterComponent } from '../vistas/footer/footer.component';

@Component({
  selector: 'app-admin1-menu',
  imports: [NavbarComponent,HeaderComponent,Admin1Component,FooterComponent],
  templateUrl: './admin1-menu.component.html',
  styleUrl: './admin1-menu.component.css'
})
export class Admin1MenuComponent {

}
