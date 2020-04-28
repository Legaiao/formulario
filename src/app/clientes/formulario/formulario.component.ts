import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente;

  constructor() { }

  ngOnInit() {
    this.cliente = new Cliente();
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.cliente);
    // ao instanciar novamente o objeto cliente, você vai limpar os controles na tela
    this.cliente = new Cliente();
  }
}
