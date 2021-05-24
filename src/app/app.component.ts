import { Component } from '@angular/core';
import { Config } from 'src/app/models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Aprendiendo Angular';
  public description = 'Aprendiendo Angular';
  public mostrar_generos_musicales: boolean = true

  constructor(){
    this.title =  Config.title
    this.description =  Config.description
  }
  ocultarGenerosMusicales(){
    this.mostrar_generos_musicales = false
  }
}
