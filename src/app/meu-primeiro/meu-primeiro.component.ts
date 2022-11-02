import { Component } from "@angular/core";


// Notação (Decorator) de components
// O que passamos dentro de params, são metadados
@Component({
  selector: "meu-primeiro-component", // Nome da tag HTML que queremos criar
  template: `
    <p>Meu primeiro component com Angular 2!</p>
  `
})
export class MeuPrimeiroComponent {}
