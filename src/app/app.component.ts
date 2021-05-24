import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Aprendiendo Angular';
  public mostrar_generos_musicales: boolean = true

  ocultarGenerosMusicales(){
    this.mostrar_generos_musicales = false
  }
}
