import { Routes } from '@angular/router';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';


// http:localhost:4200/productos
export const routes: Routes = [
    { path: '', redirectTo: '/clientes', pathMatch: 'full' },
    { path: 'clientes', component: ListaClientesComponent },
    { path: 'guardar', component: CrearClienteComponent }
   /* { path: 'productos', component: ProductoListaComponent },
    { path: 'agregar-producto', component: AgregarProductoComponent },
    { path: 'editar-producto/:id', component: EditarProductoComponent }// Ruta wildcard para manejar rutas no encontradas */
  ];
