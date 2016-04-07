import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
})
export class DashboardComponent {

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }

    // constructor(private _heroService: HeroService) { }

    heroes: Hero[] = [];

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        /*  link parameters array has two elements: 
        * 1. the name of the destination route: 'HeroDetail'
        * 2. a route parameter object: id field set to the value of the selected hero's id
        */
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

}