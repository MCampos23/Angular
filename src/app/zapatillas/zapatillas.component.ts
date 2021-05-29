import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/models/zapatilla'
import { ZapatillaService } from '../service/zapatillas.service'

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
  public zapatillas: Array<Zapatilla>;
  public mi_marca: string;
  public marcas: string[]
  public color: string

  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.color = "red" 
    this.marcas = new Array
    this.mi_marca = "fila"
    this.zapatillas = this._zapatillaService.getZapatillas()
    
  }
    ngOnInit(): void {
    alert(this._zapatillaService.getTexto())
    this.getMarcas()
  }
    getMarcas(){
    this.zapatillas.forEach((zapatilla, index)=> {
      if(this.marcas.indexOf(zapatilla.marca) < 0) this.marcas.push(zapatilla.marca)
      console.log(index)
    })
    console.log(this.marcas)
  }
  getMarca(){
    alert(this.mi_marca)
  }
  addMarca(){
    this.marcas.push(this.mi_marca)
  }
  borrarMarca(indice: number){
    this.marcas.splice(indice, 1)
  }
  onBlur(){
    console.log("Has salido del input")
  }
  mostrarPalabra(){
    alert(this.mi_marca)
  }
}
