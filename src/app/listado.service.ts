import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { CarrosN } from './CarroNuevo';
import { CarrosU } from './carrUsado';
@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  private nuevos:Carro[]=CarrosN;

  private usados:Carro[]=CarrosU; 


  constructor() { }

  getNuevos():Carro[]{
    return this.nuevos;
  }
  getUnNuevo(posicion:number):Carro{
    return this.nuevos[posicion];

  }
  getUsados():Carro[]{
    return this.usados;
  }
  getUnUsado(posicion:number):Carro{
    return this.usados[posicion];
  }
  searchUsado(nomUsado:string):number{
    let index=this.usados.findIndex(p=>p.modelo===nomUsado)
    return index;
  }  
  


}
