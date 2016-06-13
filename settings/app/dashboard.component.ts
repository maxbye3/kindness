import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Kindness} from './kindness';
import {KindnessService} from './kindness.service';

@Component({
  selector: 'my-dashboard',
  template: `
  <h3>Top Kindness Action</h3>
<div class="grid grid-pad">
  <div *ngFor="#kindness of kindnesses;"
  (click)="gotoDetail(kindness)" 
   class="col-1-4">
    <div class="module hero">
      <h4>{{kindness.deed}}</h4>
    </div>
  </div>
</div>
`
})

export class DashboardComponent implements OnInit {

  kindnesses: Kindness[] = [];

  constructor(
    private router: Router,
    private _kindnessService: KindnessService) {
  }

  ngOnInit() {
    this._kindnessService.getKindness()
      .then(kindnesses => this.kindnesses = kindnesses.slice(0,3));
  }
  
  gotoDetail(kindness: Kindness) {
    let link = ['KindnessDetail', { id: kindness.id }];
    this.router.navigate(link);
  } 
}
