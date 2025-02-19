import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ClientesComponent } from './finanzas/clientes/clientes.component';
import { provideRouter, RouterModule } from '@angular/router';
import { EditarClienteComponent } from './finanzas/clientes/editar-cliente/editar-cliente.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { ProductosComponent } from './finanzas/productos/productos.component';
import { EditarProductoComponent } from './finanzas/productos/editar-producto/editar-producto.component';
import { CrearProductoComponent } from './finanzas/productos/crear-producto/crear-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EditarClienteComponent,
    FinanzasComponent,
    ProductosComponent,
    EditarProductoComponent,
    CrearProductoComponent
    
    /*CrearClienteComponent*/
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
