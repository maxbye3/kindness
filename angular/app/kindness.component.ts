import {Component, OnInit} from 'angular2/core';
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
<my-kindness-detail [kindness]="selectedKindness"></my-kindness-detail>
  `,
  styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
directives: [KindnessDetailComponent]
})

export class KindnessComponent implements OnInit {

  kindnesses: Kindness[];
  selectedKindness: Kindness;
  title = 'Kindness App';  
  onSelect(kindness: Kindness) { this.selectedKindness = kindness; }
  
  constructor(private _kindnessService: KindnessService) { }
  
 getKindness() {
      this._kindnessService.getKindness().then(kindnesses => this.kindnesses = kindnesses);
  }


  ngOnInit() {
    this.getKindness();
  }
}

 