import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [ // Componentes, diretivas e pipes
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ // Outros Módulos
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], // Serviços declarados no escopo
  bootstrap: [AppComponent] // Componente principal ao ser executada a aplicação
})
export class AppModule { }
