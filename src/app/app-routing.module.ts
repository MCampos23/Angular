import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VideojuegoComponent } from './videojuego/videojuego.component';
import { GenerosMusicalesComponent } from './generos-musicales/generos-musicales.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'videojuegos', component: VideojuegoComponent },
  { path: 'generos-musicales', component: GenerosMusicalesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
