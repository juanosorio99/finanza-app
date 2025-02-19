import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from 'src/app/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = {} as Producto;
  id!: number;

  constructor(private productoServicio: ProductoService,
   private ruta: ActivatedRoute, 
   private enrutador: Router){}

   ngOnInit(){
     this.id = this.ruta.snapshot.params['id'];
     this.productoServicio.getProducto(this.id).subscribe(
       {
         next: (datos) => this.producto = datos,
         error: (errores: any) => console.log(errores)
       }
     );
   }

   onSubmit(){
     this.guardarCliente();
   }

   guardarCliente(){
     this.productoServicio.actualizarProducto(this.id, this.producto).subscribe(
       {
         next: (datos) => this.irProductoLista(),
         error: (errores) => console.log(errores)
        }
     );
   }

   irProductoLista(){
     this.enrutador.navigate(['/productos']);
   }
}


