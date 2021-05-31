import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { GenerosMusicalesComponent } from './generos-musicales/generos-musicales.component';
import { CursosComponent } from './cursos/cursos.component';
import { CardComponent } from './card/card.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    GenerosMusicalesComponent,
    CursosComponent,
    CardComponent,
    ZapatillasComponent,
    HomeComponent,
    ExternoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
