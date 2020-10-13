import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() nameUser;//recibir datos de padre a hijo 
  @Input() heroes;

  hero: Hero={
    id:1,
    name:'Marlon Carrion',
    address:{
      country:'Ecuador',
      city: 'Cuenca'
    }
  };
  
  constructor() { }

  ngOnInit(){
  }

}
