import {Component, OnInit,  ElementRef, Input } from 'angular2/core';
import { Injectable } from 'angular2/core';
import {SonnyDialogue } from './sonny.dialogue.component';

@Component({
  selector: 'settings-component',
  templateUrl: 'app/settings.component.html',
  styleUrls: ['app/settings.component.css'],
  providers: [SonnyDialogue]
})

@Injectable()
export class SettingsComponent implements OnInit{
    private whoKind;
    private sonnyDialogue;

    constructor(sonnyDialogue:SonnyDialogue) {
      this.sonnyDialogue = sonnyDialogue;
    }

    ngOnInit(){
      setTimeout(() => {
      document.getElementById("settingsH1").style.border = "solid rgba(256,256,256,1) 2px";
      }, 500);  
    }

    themeView(){
      this.back();
      document.getElementById("themeChange").style.display = "block";
      this.sonnyDialogue.transitionViews("kindnessView","themeChange");
    }

    back(){
     this.sonnyDialogue.transitionViews("themeChange","kindnessView");     
     this.sonnyDialogue.transitionViews("contactView","kindnessView");
     document.getElementById("settingsView").style.animation = "settingsOutro 1s";
     setTimeout(() => { 
        document.getElementById("settingsView").style.display = "none";
        
      }, 1000);
    }

    questionTime(){
      this.back();
      this.sonnyDialogue.transitionViews("kindnessView","contactView");
      document.getElementById("themeChange").style.display = "none";
      var inputOptional = document.getElementById("inputOptional").style;
      var inputMessage = document.getElementById("inputMessage").style;
      this.inputStyle(inputOptional);
      this.inputStyle(inputMessage);
    }

    moonhead_back(){
      document.getElementById("settingsView").style.display = "block";
      document.getElementById("mrMoonhead").style.display = "none";
    }


    mrMoonhead(){
      document.getElementById("settingsView").style.display = "none";
      document.getElementById("mrMoonhead").style.display = "block";
    }


    /*
    * STYLE THE INPUTS
    */
    inputStyle(input){
      input.margin = "0px";
      input.fontSize = "30px";
      input.background = "rgba(256,256,256,0.7)";
      input.padding = "5px";
      input.marginBottom = "30px";
      input.width = "100%";
      input.border = "none";
    }



}

