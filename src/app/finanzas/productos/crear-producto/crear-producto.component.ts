import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto: Producto = {} as Producto;

  constructor(private productoServicio: ProductoService,
   private enrutador: Router){}

   ngOnInit(): void {
  }

   onSubmit(){
     this.crearProducto();
   }

   crearProducto(){
    this.productoServicio.crearProducto(this.producto).subscribe(
      {
        next: (datos) => {
             this.irProductoLista();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }

   irProductoLista(){
     this.enrutador.navigate(['/productos']);
   }
}