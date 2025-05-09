import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticadoService } from '../../servicios/autenticado.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router=inject(Router)
  constructor(private autenticado:AutenticadoService) {}
   nombre:string='';
   usuario:any;
   menuAbierto = false;

   toggleMenu() {
     this.menuAbierto = !this.menuAbierto;
   }
   ngOnInit():void{
    this.usuario=this.autenticado.getUsuario();
    this.nombre=this.usuario.username;

   }
   cerrar(){
    console.log("se a presionado")
      this.autenticado.cerrarSesion();
      this.router.navigate(['/principal']);

   }
 
}
