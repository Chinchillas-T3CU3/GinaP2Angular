import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { CarrosN } from './CarroNuevo';
import { CarrosU } from './carrUsado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  private nuevos:Carro[]=CarrosN;

  private usadosUrl = 'https://carrosusados.free.beeceptor.com/'


   constructor(private http: HttpClient) {}

  getNuevos():Carro[]{
    return this.nuevos;
  }
  getUnNuevo(posicion:number):Carro{
    return this.nuevos[posicion];

  }
   getUsados(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.usadosUrl);
  }
  getUnUsado(posicion: number): Observable<Carro> {
    return this.getUsados().pipe(
      map(carros => carros[posicion])
    );
  }
   searchUsado(nomUsado: string): Observable<number> {
    return this.getUsados().pipe(
      map(carros => carros.findIndex(c => c.modelo === nomUsado ))
    );
  }

  


}
