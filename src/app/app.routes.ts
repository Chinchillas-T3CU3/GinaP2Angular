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



export const routes: Routes = [
    {path:"principal", component:PrincipalComponent} ,
    {path:"galeria", component:ModelosComponent} ,
    {path:"servicios", component:MantenimientosComponent} ,
    {path:"after", component:AftermarkerComponent} ,
    {path:"garantias", component:GarantiasComponent} ,
    {path:"atencion", component:SerclienteComponent} ,
    {path:"financiero", component:ServFinacieroComponent} ,
    {path:"login", component:LoginComponent} ,
];
