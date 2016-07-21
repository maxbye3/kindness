import {Component, OnInit} from 'angular2/core';
import { GoCalComponent } from './go.cal.component';


@Component({
  selector: 'kindness-complete',
    template: `
<!-- KINDNESS Done Screen -->
    <div id='doneView' style="display: none;">
            
            <h1> Your daily kindness is complete.
            <br> New day starts in {{hoursLeft}} hours. 
            <br>In the meantime, plan somein' nice or... 
            <br>
            <div (click)="goCal()"
            style="
            border: black solid 2px; padding: 5px; MARGIN-TOP: 7.5PX;"> 
            check progress 
            </div>
            
    <!-- done screen-->

  `,
  styleUrls: ["app/sonny.dialogue.component.css"],
  providers: [GoCalComponent]
  
})


export class KindnessComplete {
    private gocalComponent;
    constructor(gocalComponent:GoCalComponent) {
        this.gocalComponent = gocalComponent;
    }

  

    goCal(){
      this.gocalComponent.toCal();
    }


}
