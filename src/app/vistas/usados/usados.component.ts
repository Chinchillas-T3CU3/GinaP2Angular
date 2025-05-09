import { Component } from '@angular/core';
import { Carro } from '../../carro';
import { ListadoService } from '../../listado.service';
import { BuscadorComponent } from '../buscador/buscador.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usados',
  imports: [BuscadorComponent],
  templateUrl: './usados.component.html',
  styleUrls: ['./usados.component.css']  // Cambié "styleUrl" a "styleUrls"
})
export class UsadosComponent {
  usados: Carro[] = [];
  carroselec: string = '';

  constructor(private miservicio: ListadoService, private router: Router) {}

  ngOnInit(): void {
    this.miservicio.getUsados().subscribe({
      next: (datos) => this.usados = datos,
      error: (err) => console.error('Error al cargar usados:', err)
    });
  }

  get CarrosUsados(): Carro[] {
    return this.usados.filter(carro =>
      carro.modelo.toLowerCase().includes(this.carroselec.toLowerCase()) ||
      carro.marca.toLowerCase().includes(this.carroselec.toLowerCase())
    );
  }

  actualizar(valor: string) {
    this.carroselec = valor;
  }

  verDetalles(index: number) {
    this.router.navigate(['/item', index]);
  }
}