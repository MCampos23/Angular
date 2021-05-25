import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/models/zapatilla'

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss']
})
export class ZapatillasComponent implements OnInit {
  public zapatillas: Array<Zapatilla>
  constructor() { 
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
      new Zapatilla('Runner', 'Nike', 'Negro', 60, true),
      new Zapatilla('g320', 'Adidas', 'Blanco', 120, false),
      new Zapatilla('Air-max', 'Nike', 'Rojas', 110, true)
    ]

  }

  ngOnInit(): void {
    console.log(this.zapatillas)
  }

}
