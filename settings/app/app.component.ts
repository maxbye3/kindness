import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { BackgroundComponent } from './background.component';
import { SonnyDialogue } from './sonny.dialogue.component';
import { SonnyComponent } from './sonny.component';
import { CalComponent } from './cal.component';


@Component({
  selector: 'my-app',
    template: `
    <!-- <router-outlet></router-outlet>
  <a [routerLink]="['JQUERY']">loading</a> -->
  <background></background>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [
    BackgroundComponent,
    SonnyComponent,
    SonnyDialogue,
    CalComponent,
    ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  ]
})



@RouteConfig([
  {
    path:'/changetheme', 
    name: 'ChangeTheme', 
    component: BackgroundComponent
  },
  // {
  //   path:'/jquery', 
  //   name: 'JQUERY', 
  //   component: SonnyDialogue
  // }
])

export class AppComponent {
}