import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ListadoService } from '../../listado.service';
import { Carro } from '../../carro';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-vistas-rutas',
  imports: [NavbarComponent, FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './vistas-rutas.component.html',
  styleUrls: ['./vistas-rutas.component.css']  
})
export class VistasRutasComponent {
  item: any;
  usados: Carro[] = [];
  
  constructor(public miservicio: ListadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const index = +this.route.snapshot.paramMap.get('id')!;
    

    this.miservicio.getUsados().subscribe({
      next: (datos) => {
        this.usados = datos;  
        this.item = this.usados[index];  
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);  
      }
    });
  }
}
