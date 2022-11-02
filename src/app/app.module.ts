import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    // Componentes, diretivas e pipes
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
  ],
  imports: [
    // Outros Módulos
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
  ],
  providers: [], // Serviços declarados no escopo
  bootstrap: [AppComponent], // Componente principal ao ser executada a aplicação
})
export class AppModule {}
