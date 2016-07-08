import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Kindness} from './kindness';
import {KindnessDetailComponent} from './kindness-detail.component';
import {KindnessService} from './kindness.service';

@Component({
  selector: 'my-kindness',
  template:`  
  <h2>My Actions</h2>
  <ul class="heroes">
  
    <!-- each hero goes here -->
    <li *ngFor="#kindness of kindnesses;" 
    [class.selected]="kindness === selectedKindness"
    (click)="onSelect(kindness)">
    <span class="badge">{{kindness.id}}</span> {{kindness.deed}}
</ul>
<div *ngIf="selectedKindness">
  <h2>
    {{selectedKindness.deed | uppercase}} is my kindness
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
  `,
directives: [KindnessDetailComponent]
})

export class KindnessComponent implements OnInit {

  kindnesses: Kindness[];
  selectedKindness: Kindness;
  title = 'Kindness App';  
  onSelect(kindness: Kindness) { this.selectedKindness = kindness; }
  
  constructor(
    private _kindnessService: KindnessService,
    private _router: Router
    ) { }
  
 getKindness() {
      this._kindnessService.getKindness().then(kindnesses => this.kindnesses = kindnesses);
  }
  
  gotoDetail() {
      let link = ['KindnessDetail', { id: this.selectedKindness.id }];
      this._router.navigate(link);
  }

  ngOnInit() {
    this.getKindness();
  }
}

 