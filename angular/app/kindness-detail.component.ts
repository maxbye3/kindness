import {Component, Input } from 'angular2/core';
import {Kindness} from './kindness';

@Component({
    selector: 'my-kindness-detail',
    template: `
  <div *ngIf="kindness">
    <h2>{{kindness.name}} details!</h2>
    <div><label>id: </label>{{kindness.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="kindness.deed" placeholder="deed"/>
    </div>
  </div>`
})

export class KindnessDetailComponent {
      @Input() 
        kindness: Kindness;
}
