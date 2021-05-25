import { Component , OnInit, DoCheck, OnDestroy} from '@angular/core'

@Component({
    selector:'generos-musicales',
    templateUrl: './generos-musicales.component.html'
})

export class GenerosMusicalesComponent implements OnInit, DoCheck, OnDestroy {
    public title: string 
    public subTitle: string 
    
    constructor(){
        this.title = "Géneros Musicales" 
        this.subTitle = "Estos son los mejores géneros musicales"

       // console.log("The component is working!!")
    }
    ngOnInit(): void{
        //console.log("Generos musicales OnInit working!!")
    }
    ngDoCheck(): void{
       // console.log("Generos musicales DoCheck working!!")
    }
    ngOnDestroy(): void{
        //console.log("Generos musicales OnDestroy")
    }
    changeTitle(){
        this.title = "Nuevo título"
    }
}