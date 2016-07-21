import {Component,OnInit} from 'angular2/core';
import {SonnyDialogue} from './sonny.dialogue.component';


@Component({
  selector: 'help-menu',
  template: `
    <div class="themeButton selected">
        give me an example kindness
    </div>

    <div class="themeButton selected">
        show me the tour again
    </div>

    <div class="themeButton selected">
       I have a question 
    </div>

    <div class="themeButton selected">
        go back
    </div>
    `,
    styleUrls: ["app/sonny.dialogue.component.css"],
})


export class HelpComponent implements OnInit {
 
  constructor() {
  }

  ngOnInit() {         
         
  }

}

