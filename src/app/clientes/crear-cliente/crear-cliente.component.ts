
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from 'src/app/cliente.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [ClienteService]
})
export class CrearClienteComponent implements OnInit {
  cliente: Cliente = {} as Cliente;

  constructor(private clienteServicio: ClienteService,
    private enrutador: Router){

    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    onSubmit(){
      this.guardarCliente();
    }

    guardarCliente(){
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
