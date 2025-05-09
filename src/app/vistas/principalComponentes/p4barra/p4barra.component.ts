import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-p4barra',
  imports: [],
  templateUrl: './p4barra.component.html',
  styleUrl: './p4barra.component.css'
})
export class P4barraComponent {
  autos: string[] = ['Leon', 'Ateca', 'Formentor'];

  @Output() autoSeleccionado = new EventEmitter<string>();



  onSeleccionar(event: any) {
    this.autoSeleccionado.emit(event.target.value);
  }

}
