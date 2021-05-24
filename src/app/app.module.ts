import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { GenerosMusicalesComponent } from './generos-musicales/generos-musicales.component';
import { CursosComponent } from './cursos/cursos.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    GenerosMusicalesComponent,
    CursosComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
