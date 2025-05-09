import { Routes } from '@angular/router';
import path from 'node:path';
import { PrincipalComponent } from './principal/principal.component';
import { ModelosComponent } from './modelos/modelos.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { AftermarkerComponent } from './aftermarker/aftermarker.component';
import { GarantiasComponent } from './garantias/garantias.component';
import { SerclienteComponent } from './sercliente/sercliente.component';
import { ServFinacieroComponent } from './vistas/serv-finaciero/serv-finaciero.component';
import { LoginComponent } from './login/login.component';
import { Admin1MenuComponent } from './admin1-menu/admin1-menu.component';
import { AdminInfo1Component } from './admin-info1/admin-info1.component';
import { AdminInfo2Component } from './admin-info2/admin-info2.component';
import { FormularioFinacieroComponent } from './formulario-finaciero/formulario-finaciero.component';
import { VistasRutasComponent } from './vistas/vistas-rutas/vistas-rutas.component';
import { FormularioManejoComponent } from './formulario-manejo/formulario-manejo.component';



export const routes: Routes = [
    {path:"principal", component:PrincipalComponent} ,
    {path:"galeria", component:ModelosComponent} ,
    {path:"servicios", component:MantenimientosComponent} ,
    {path:"after", component:AftermarkerComponent} ,
    {path:"garantias", component:GarantiasComponent} ,
    {path:"atencion", component:SerclienteComponent} ,
    {path:"financiero", component:FormularioFinacieroComponent} ,
    {path:"login", component:LoginComponent} ,
    {path:"AdminMenu", component:Admin1MenuComponent} ,
    {path:"AdminInfo1", component:AdminInfo1Component} ,
    {path:"AdminInfo2", component:AdminInfo2Component} ,
    {path:"item/:id", component:VistasRutasComponent} ,
    {path:"pruebaManejo", component:FormularioManejoComponent} ,
 
];
