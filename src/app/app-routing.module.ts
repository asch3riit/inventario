import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { VentasComponent } from './ventas/ventas.component';


const routes: Routes = [{path: 'tienda', component: TiendaComponent},
{path: 'ventas', component: VentasComponent},
{path: '', component: TiendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
