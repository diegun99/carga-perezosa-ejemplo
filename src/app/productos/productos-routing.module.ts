import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarComponent } from './pages/generar/generar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {path : '',
  children: [
    {path: 'agregar', component : GenerarComponent},
    {path: 'listado', component : ListadoComponent},
    {path: 'producto', component : ProductoComponent},
    {path: '**', redirectTo : 'listado'}
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
