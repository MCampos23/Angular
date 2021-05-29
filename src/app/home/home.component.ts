import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public identified: boolean

  constructor() { 
    this.identified = false 
  }

  ngOnInit(): void {
  }
  setIdentified(){
    this.identified = true
  }
  unsetIdentified(){
    this.identified = false
  }
}
