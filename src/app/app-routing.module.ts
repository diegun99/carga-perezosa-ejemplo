import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'auth',
  loadChildren : () => import('./auth/auth.module')
  .then(m=> m.AuthModule)// se importa de manera perezosa el auth, se hace mediante la ruta del modulo, no de las rutas, 
},
{path : 'productos',
loadChildren : () => import('./productos/productos.module')
.then(m=> m.ProductosModule)// se importa de manera perezosa el auth, se hace mediante la ruta del modulo, no de las rutas, 
},
{path : '**',redirectTo:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
