import { Routes } from '@angular/router';
import { ListaClientesComponent } from './finanzas/clientes/lista-clientes/lista-clientes.component';
import { CrearClienteComponent } from './finanzas/clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './finanzas/clientes/editar-cliente/editar-cliente.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { ProductosComponent } from './finanzas/productos/productos.component';
import { CrearProductoComponent } from './finanzas/productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './finanzas/productos/editar-producto/editar-producto.component';


// http:localhost:4200/productos
export const routes: Routes = [
    { path: '', redirectTo: '/finanzas', pathMatch: 'full' },
    { path: 'finanzas', component: FinanzasComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'editar-productos/:id', component: EditarProductoComponent },
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'clientes', component: ListaClientesComponent },
    { path: 'guardar', component: CrearClienteComponent },
    { path: 'editar/:id', component: EditarClienteComponent },
    
   /* { path: 'productos', component: ProductoListaComponent },
    { path: 'agregar-producto', component: AgregarProductoComponent },
    { path: 'editar-producto/:id', component: EditarProductoComponent }// Ruta wildcard para manejar rutas no encontradas */
  ];
