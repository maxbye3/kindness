import {Component, OnInit} from 'angular2/core';
import {KindnessService} from './kindness.service';
import { KindnessComponent } from './kindness.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component';
import { ChangeThemeComponent } from './change-theme.component';
import { KindnessDetailComponent } from './kindness-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Kindness']">Kindness</a>
    <a [routerLink]="['ChangeTheme']">Change Theme</a>
    <router-outlet></router-outlet>
  `,
  directives: [
    KindnessComponent,
    ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    KindnessService
  ]
})



@RouteConfig([
  {
    path:'/kindness', 
    name: 'Kindness', 
    component: KindnessComponent
  },
    {
    path:'/changetheme', 
    name: 'ChangeTheme', 
    component: ChangeThemeComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
  path: '/detail/:id',
  name: 'KindnessDetail',
  component: KindnessDetailComponent
}

  
])

export class AppComponent {
  title = 'Kindness App';
}