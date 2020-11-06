import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from './material';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { TiendaComponent } from './tienda/tienda.component';
import { ListacategoriasComponent } from './listacategorias/listacategorias.component';
import { ProductComponent } from './product/product.component';
import {ProductosService} from './shared/productos.service';
import { environment} from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { RegistroventasComponent } from './registroventas/registroventas.component';
import { VentasComponent } from './ventas/ventas.component';
import { VenderComponent } from './vender/vender.component';
import { ControlcategoriasComponent } from './controlcategorias/controlcategorias.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TiendaComponent,
    ListacategoriasComponent,
    ProductComponent,
    ListaproductosComponent,
    RegistroventasComponent,
    VentasComponent,
    VenderComponent,
    ControlcategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
      FormsModule,
    ReactiveFormsModule,AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
    BrowserAnimationsModule,ToastrModule.forRoot()
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
