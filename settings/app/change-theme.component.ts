import {Component, OnInit,  ElementRef, Input } from 'angular2/core';
import {Router} from 'angular2/router';
import { HighlightDirective } from './change-theme.directive';

@Component({
  selector: 'change-theme',
  templateUrl: 'app/change-theme.component.html',
  styleUrls: ['app/change-theme.component.css']
})

export class ChangeThemeComponent {

  public showStyle = false;
  private sonnyState = "./img/sonny/intro.gif";
  private theme = "summer";
  private selectedBackground = "summer";
    constructor() {}
    
    /*
    * Changing the theme
    */
    changeTheme() {
      return this.theme;
    }

    returnSelected(){
      if(this.showStyle == true){       
        return 'rgba(0,0,0,0.05)';
      }
    }

    selectButton(theme){
      this.selectedBackground = theme;
      console.log(this.selectedBackground);
      return 'rgba(0,0,0,0.05)';
    }
    // theme change (end)

    /*
    * Changing Sonny
    */
    changeGraphic(state){
        debugger;
        switch(state) {
            case "intro":
                this.sonnyState = "./img/sonny/intro.gif";
                break;
            case "exit":
                this.sonnyState = "./img/sonny/exit.gif";
            break;
            case "talking":
                this.sonnyState = "./img/sonny/talking.gif";
            break;
            case "winning":
                this.sonnyState = "./img/sonny/winning.gif";
            break;
            case "bounce":
                this.sonnyState = "./img/sonny/bounce.gif";
            break;
            case "checkout":
                this.sonnyState = "./img/sonny/checkout.gif";
            break;
            case "yawn":
                this.sonnyState = "./img/sonny/yawn.gif";
            break;
            case "idle":
                this.sonnyState = "./img/sonny/idle.gif";
            break;
            case "idle-blink.gif":
                this.sonnyState = "./img/sonny/idle-blink.gif";
            break;
            case "idle-look.gif":
                this.sonnyState = "./img/sonny/idle-look.gif";
            break;
            default:
                this.sonnyState = ""
        }
    }
    // sonny change (end)
    

}

