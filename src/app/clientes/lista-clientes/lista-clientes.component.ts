import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from 'src/app/cliente.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista-clientes.component.html',
  providers: [ClienteService],
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService,
    private enrutador: Router) {this.clientes = [];}

  ngOnInit() {
    console.log('ngOnInit called');
    this.obtenerCliente();
  }

  private obtenerCliente() {
    this.clienteService.obtenerClienteLista().subscribe(
      (datos) => {
        this.clientes = datos;
        console.log(this.clientes);
      },
      (error) => {
        console.error('Error al obtener cleintes', error);
      }
    );
  }

  editarCliente(id: number){
    this.enrutador.navigate(['editar-cliente', id])
  }

  eliminarCliente(id: number){
    this.clienteService.eliminarCliente(id).subscribe(
      {
        next: (datos) => this.obtenerCliente(),
        error: (errores) => console.log(errores)
       }
      );
    }
}
