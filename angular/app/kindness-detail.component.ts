import {Component, Input, OnInit} from 'angular2/core';
import {Kindness} from './kindness';
import { RouteParams } from 'angular2/router';
import { KindnessService } from './kindness.service';

@Component({
    selector: 'my-kindness-detail',
    template: `    
  <div *ngIf="kindness">
    <h2>{{kindness.deed}} details!</h2>
    <div><label>id: </label>{{kindness.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="kindness.deed" placeholder="deed"/>
    </div>
    <button (click)="goBack()">Back</button>
  </div>`
})

export class KindnessDetailComponent implements OnInit {
  
constructor(
  private _kindnessService: KindnessService,
  private _routeParams: RouteParams) {
}

ngOnInit() {
    let id = +this._routeParams.get('id');
    this._kindnessService.getKindnessById(id)
      .then(kindness => this.kindness = kindness);
  }
  
  goBack() {
  window.history.back();
}

}
