import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-buscador',
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Output() textoBuscado=new EventEmitter<string>();
  onInput(event:Event){
    const valor=(event.target as HTMLInputElement).value;
    this.textoBuscado.emit(valor);
  }

}
