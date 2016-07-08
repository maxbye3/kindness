import {Component, OnInit} from 'angular2/core';
import {KindnessService} from './kindness.service';
import { KindnessComponent } from './kindness.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component';
import { BackgroundComponent } from './background.component';
import { KindnessDetailComponent } from './kindness-detail.component';

@Component({
  selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
     
    <!-- <a [routerLink]="['ChangeTheme']">Change Theme</a> -->
    <!-- <background></background> -->
  `,
  styleUrls: ['app/app.component.css'],
  directives: [
    KindnessComponent,
    BackgroundComponent,
    ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    KindnessService
  ]
})



@RouteConfig([
    {
    path:'/changetheme', 
    name: 'ChangeTheme', 
    component: BackgroundComponent
  },
  // default views
  {
    path:'/kindness', 
    name: 'Kindness', 
    component: KindnessComponent
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
}