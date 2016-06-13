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
  private theme = "summer";
  private selectedBackground = "summer";
    constructor() {}

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

    

}

