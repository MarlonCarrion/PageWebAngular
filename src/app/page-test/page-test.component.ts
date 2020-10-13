import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})
export class PageTestComponent implements OnInit {

  users=['joe', 'carl','sigmud', 'jordan'];

  hero1: Hero={
    id:1,
    name:'Simon Bolivar',
    address:{
      country:'Venezuela',
      city: 'Caracas'
    }
  };
  hero2: Hero={
    id:2,
    name:'Manuelita Saenz',
    address:{
      country:'Ecuador',
      city: 'Quito'
    }
  };
  hero3: Hero={
    id:3,
    name:'Antonio Neuman',
    address:{
      country:'Ecuador',
      city: 'Ambato'
    }
  };

  heroes =[this.hero1, this.hero2, this.hero3];

  activated = true;

  constructor() { }

  ngOnInit(): void {
  }

}
