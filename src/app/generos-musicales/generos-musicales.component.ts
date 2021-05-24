import { Component , OnInit} from '@angular/core'

@Component({
    selector:'generos-musicales',
    templateUrl: './generos-musicales.component.html'
})

export class GenerosMusicalesComponent implements OnInit {
    public title: string 
    public subTitle: string 
    
    constructor(){
        this.title = "Géneros Musicales" 
        this.subTitle = "Estos son los mejores géneros musicales"

        console.log("The component is working!!")
    }
    ngOnInit(){
        console.log("OnInit working!!")
    }
}