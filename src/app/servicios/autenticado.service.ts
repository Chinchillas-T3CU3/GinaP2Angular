import { Injectable } from '@angular/core';
import { type } from 'node:os';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoService {
  private usuarioActual:any=null;

  constructor(){
    if(typeof window!='undefined' && window.localStorage){

    
    const usuario=localStorage.getItem('usuario');
    if(usuario){
      
      this.usuarioActual=JSON.parse(usuario);
    }
  } 
  }
  setUsuario(usuario:any){
    this.usuarioActual=usuario;
    if(typeof window!='undefined' && localStorage){
      localStorage.setItem('usuario',JSON.stringify(usuario));
    }
    
   
  }
  getUsuario(){
    return this.usuarioActual;
  }
  Autenticado():boolean{
    return !!this.usuarioActual;
  }
  cerrarSesion(){
    this.usuarioActual=null;
    if(typeof window !='undefined' &&localStorage){
      localStorage.removeItem('usuario')
    }

  }
  
}
