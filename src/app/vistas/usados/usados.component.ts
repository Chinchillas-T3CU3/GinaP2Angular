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
<<<<<<< HEAD
  usados:Carro[]=[];
  carroselec:string='';
  constructor(public miservicio:ListadoService,private router: Router){
    this.usados=this.miservicio.getUsados();
=======
  usados: Carro[] = [];
  carroselec: string = '';
>>>>>>> origin/Chinchillas

  constructor(private miservicio: ListadoService) {}

  ngOnInit(): void {
    this.miservicio.getUsados().subscribe({
      next: (datos) => this.usados = datos,
      error: (err) => console.error('Error al cargar usados:', err)
    });
  }

  get CarrosUsados(): Carro[] {
    return this.usados.filter(carro =>
      carro.modelo.toLowerCase().includes(this.carroselec.toLowerCase())
    );
  }

  actualizar(valor: string) {
    this.carroselec = valor;
  }
<<<<<<< HEAD
  verDetalles(index:number){
    this.router.navigate(['/item',index])
  }
=======

>>>>>>> origin/Chinchillas
}
