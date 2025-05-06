import { Component } from '@angular/core';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { HeaderComponent } from '../vistas/header/header.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { Admin3Component } from '../vistas/admin3/admin3.component';

@Component({
  selector: 'app-admin-info2',
  imports: [NavbarComponent,HeaderComponent,FooterComponent,Admin3Component],
  templateUrl: './admin-info2.component.html',
  styleUrl: './admin-info2.component.css'
})
export class AdminInfo2Component {

}
