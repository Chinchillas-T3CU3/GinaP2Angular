import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ListadoService } from '../../listado.service';
import { Carro } from '../../carro';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-vistas-rutas',
  imports: [NavbarComponent,FooterComponent,HeaderComponent,RouterModule],
  templateUrl: './vistas-rutas.component.html',
  styleUrl: './vistas-rutas.component.css'
})
export class VistasRutasComponent {
  item:any;
  usados:Carro[]=[];
  constructor(public miservicio:ListadoService,private route:ActivatedRoute){}
  ngOnInit(){
    const index= +this.route.snapshot.paramMap.get('id')!;
    this.usados=this.miservicio.getUsados();
    const items=this.usados;
    this.item=items[index];
    


  }
  

}
