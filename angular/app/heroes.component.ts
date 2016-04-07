import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import { Router } from 'angular2/router';
import {OnInit} from 'angular2/core';
@Component({  
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/style/heroes.component.css'],
  directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
  ngOnInit() {
      this.getHeroes();
  }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
  
  constructor(
      private _router: Router,
      private _heroService: HeroService) {
  }
  
  gotoDetail() {
      let link = ['HeroDetail', { id: this.selectedHero.id }];
      this._router.navigate(link);   
  }

  getHeroes() {
   // this.heroes = this._heroService.getHeroes();
   this._heroService.getHeroes().then(heroes => this.heroes = heroes);
   
   //slow emulator
   this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}

