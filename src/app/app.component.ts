import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioFinacieroComponent } from "./formulario-finaciero/formulario-finaciero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioFinacieroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AgenciaAutomotriz';
}
