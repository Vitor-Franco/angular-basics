import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.training';
  urlImage = 'https://picsum.photos/seed/picsum/500/300';
  cursoAngular = true;
  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nome = 'abc';

  nomeDoCurso = 'Angular';

  pessoa = {
    nome: 'vitor',
    idade: 21,
  };

  getValor() {
    return 4;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}

  ngOnInit(): void {}
}
