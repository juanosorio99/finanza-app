
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from 'src/app/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  cliente: Cliente = {} as Cliente;

  constructor(private clienteServicio: ClienteService,
    private enrutador: Router){

    }

    onSubmit(){
      this.guardarProducto();
    }

    guardarProducto(){
      this.clienteServicio.agregarCliente(this.cliente).subscribe(
        {
          next: (datos) => {
               this.irListaProductos();
          },
          error: (error: any) => {console.log(error)}
        }
      );
    }

    irListaProductos(){
      this.enrutador.navigate(['/clientes']);
    }

}
