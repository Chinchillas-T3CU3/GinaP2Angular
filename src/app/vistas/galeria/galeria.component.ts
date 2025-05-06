import { Component } from '@angular/core';
import { Carro } from '../../carro';
import { ListadoService } from '../../listado.service';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  nuevos:Carro[]=[];
  constructor(public miservicio:ListadoService){
    this.nuevos=this.miservicio.getNuevos();
  }

}
