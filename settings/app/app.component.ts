import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { BackgroundComponent } from './background.component';
import { sonnySpeech } from './speech.component';
import { SonnyComponent } from './sonny.component';

@Component({
  selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
    <a [routerLink]="['JQUERY']">loading</a>
    <!-- <background></background> -->
  `,
  styleUrls: ['app/app.component.css'],
  directives: [
    BackgroundComponent,
    SonnyComponent,
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
  {
    path:'/jquery', 
    name: 'JQUERY', 
    component: sonnySpeech
  }
  

  
])

export class AppComponent {
}