import {Component} from 'angular2/core';

export class Kindness {
  id: number;
  deed: string;
}

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2>{{kindness.deed}} details!</h2>
  <div><label>id: </label>{{kindness.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="kindness.deed" placeholder="deed">
  </div>
  
  <h2>My Actions</h2>
<ul class="heroes">
  <li>
    <!-- each hero goes here -->
    <li *ngFor="#kindness of kindnesses">
    <span class="badge">{{kindness.id}}</span> {{kindness.deed}}
  </li>
</ul>

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
`]
})

export class AppComponent {
  public kindnesses = KINDNESSLIST;
  kindness: Kindness = {
    id: 1,
    deed: 'Test action'
  };
  title = 'Kindness App';  
}

  var KINDNESSLIST: Kindness[] = [
  { "id": 11, "deed": "Test Action 1" },
  { "id": 12, "deed": "Test Action 2" },
  { "id": 13, "deed": "Test Action 3" },
  { "id": 14, "deed": "Test Action 4" },
  { "id": 15, "deed": "Test Action 5" },
];