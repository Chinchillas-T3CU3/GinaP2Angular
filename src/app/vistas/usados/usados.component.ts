import { Component } from '@angular/core';
import { Carro } from '../../carro';
import { ListadoService } from '../../listado.service';
import { BuscadorComponent } from '../buscador/buscador.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usados',
  imports: [BuscadorComponent],
  templateUrl: './usados.component.html',
  styleUrl: './usados.component.css'
})
export class UsadosComponent {
  usados:Carro[]=[];
  carroselec:string='';
  constructor(public miservicio:ListadoService,private router: Router){
    this.usados=this.miservicio.getUsados();

  }
  get CarrosUsados():Carro[]{
    return this.usados.filter(carro=>
      carro.modelo.toLowerCase().includes(this.carroselec.toLowerCase())
    );
  }

  actualizar(valor:string){
    this.carroselec=valor;
  }
  verDetalles(index:number){
    this.router.navigate(['/item',index])
  }
}
