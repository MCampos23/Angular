import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/models/zapatilla'

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss']
})
export class ZapatillasComponent implements OnInit {
  public zapatillas: Array<Zapatilla>;
  public mi_marca: string;
  public marcas: string[]

  constructor() { 
    this.marcas = new Array
    this.mi_marca = "fila"
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
      new Zapatilla('Runner', 'Nike', 'Negro', 60, true),
      new Zapatilla('g320', 'Adidas', 'Blanco', 120, false),
      new Zapatilla('Air-max', 'Nike', 'Rojas', 110, true)
    ]

  }
  
  ngOnInit(): void {
    console.log(this.zapatillas)
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


}
