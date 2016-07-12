import {Component, OnInit,  ElementRef, Input } from 'angular2/core';
import {Router} from 'angular2/router';
import {SonnyComponent} from './sonny.component';
import {SonnyDialogue } from './sonny.dialogue.component';

@Component({
  selector: 'background',
  templateUrl: 'app/background.component.html',
  styleUrls: ['app/background.component.css'],
  directives: [SonnyComponent,SonnyDialogue],
})

export class BackgroundComponent {

  public showStyle = false;
  private theme = "summer";
  private selectedBackground = "summer";
  private furnitureImg = './img/scenes/summer.gif';
    
    constructor() {

      // TEMPORARY
       setTimeout(() => {
             document.getElementById('themeChange').style.display = 'none';
      }, 10);// temp
    }
    
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
      this.changeFurniture(this.selectedBackground)
      return 'rgba(0,0,0,0.05)';
    }
    // theme change (end)

    changeFurniture(theme){
    if(theme == "summer")
       this.furnitureImg = './img/scenes/summer.gif'
    else if(theme == "winter")  
        this.furnitureImg = './img/scenes/winter.gif' 
    }
}

