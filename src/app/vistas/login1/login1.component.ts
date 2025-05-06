import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AutenticadoService } from '../../servicios/autenticado.service';

@Component({
  selector: 'app-login1',
  imports: [FormsModule,RouterModule],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css'
})
export class Login1Component  {
  userI:string='';
  passwordI:string='';
  nombreI:string='';

  usuariosR:{username:string;password:string,nombre:string}[]=[];
  accesoValidado:boolean |null=null;
  constructor(private router: Router,private autenticado:AutenticadoService) {}

  
  ngOnInit():void{
    const usuarios=[
      {username:"vicente",password:"1234",nombre:"vicente barrios mariscal"},
      {username:"eduardo",password:"1234",nombre:"eduardo guzman guzman"},
      {username:"alfredo",password:"1234",nombre:"alfredo chinchillas duardo"}
  ];
  if(typeof window !=='undefined' && localStorage){
    window.localStorage.setItem('usuarios',JSON.stringify(usuarios));
  }
  
    if (typeof window !== 'undefined') {
      const datos = localStorage.getItem('usuarios');
      console.log('hola perros');
      console.log(datos);
      if (datos) {
       
        this.usuariosR = JSON.parse(datos);
        
        setTimeout(() => {
          this.accesoValidado = null;
        }, 3000);
      }
    }
    
    

  }
  validar():void{
     
      if(this.usuariosR.find(u=>u.username===this.userI&&u.password===this.passwordI&&u.nombre===this.nombreI)){
        const acceso = this.usuariosR.find(u => 
          u.username === this.userI &&
          u.password === this.passwordI &&
          u.nombre === this.nombreI
        );
        this.accesoValidado=true;
        this.autenticado.setUsuario(acceso);
        this.router.navigate(['/AdminMenu']);

      }else[
        this.accesoValidado=false
      ]
      
  }
}
