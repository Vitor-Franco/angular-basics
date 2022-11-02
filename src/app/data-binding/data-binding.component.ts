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

  getValor() {
    return 4;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}
