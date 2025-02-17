import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { provideRouter, RouterModule } from '@angular/router';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EditarClienteComponent,
    CrearClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
