import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService{
    public zapatillas : Array<Zapatilla>

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Runner', 'Nike', 'Negro', 60, true),
            new Zapatilla('g320', 'Adidas', 'Blanco', 120, false),
            new Zapatilla('Air-max', 'Nike', 'Rojas', 110, true)
          ]
    }
    getTexto(){
       return "Hola mundo desde un servicio."
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }
}