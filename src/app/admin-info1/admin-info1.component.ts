import { Component } from '@angular/core';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { Admin2Component } from '../vistas/admin2/admin2.component';

@Component({
  selector: 'app-admin-info1',
  imports: [NavbarComponent,HeaderComponent,FooterComponent,Admin2Component],
  templateUrl: './admin-info1.component.html',
  styleUrl: './admin-info1.component.css'
})
export class AdminInfo1Component {

}
