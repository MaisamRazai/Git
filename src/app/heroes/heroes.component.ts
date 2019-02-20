//import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 // heroes=HEROES;

  heroes: Hero[];
  hero= Hero;
  //constructor() { }
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
   // this.heroes = this.heroService.getHeroes();
   this.heroService.getHeroes()
   .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
    this.getHeroes();
  }

}
