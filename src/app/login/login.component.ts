import { Component } from '@angular/core';
import { HeaderComponent } from '../vistas/header/header.component';
import { NavbarComponent } from '../vistas/navbar/navbar.component';
import { FooterComponent } from '../vistas/footer/footer.component';
import { Login1Component } from '../vistas/login1/login1.component';

@Component({
  selector: 'app-login',
  imports: [Login1Component,HeaderComponent,NavbarComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
