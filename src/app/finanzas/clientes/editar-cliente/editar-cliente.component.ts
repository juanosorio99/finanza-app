import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from 'src/app/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
  providers: [ClienteService]
})
export class EditarClienteComponent implements OnInit{
  cliente: Cliente = {} as Cliente;
  id!: number;

  constructor(private clienteService: ClienteService,
   private ruta: ActivatedRoute, 
   private enrutador: Router){}

   ngOnInit(){
     this.id = this.ruta.snapshot.params['id'];
     this.clienteService.obtenerClientePorId(this.id).subscribe(
       {
         next: (datos) => this.cliente = datos,
         error: (errores: any) => console.log(errores)
       }
     );
   }

   onSubmit(){
     this.guardarCliente();
   }

   guardarCliente(){
     this.clienteService.editarCliente(this.id, this.cliente).subscribe(
       {
         next: (datos) => this.irClienteLista(),
         error: (errores) => console.log(errores)
        }
     );
   }

   irClienteLista(){
     this.enrutador.navigate(['/clientes']);
   }
}
