import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  actualizarProducto(id: number): void {
    this.productoService.getProducto(id).subscribe(data => {
      console.log(data);
    });
  }
  
  cargarProductos(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.cargarProductos();
    });
  }
}
