import {Component, OnInit,  ElementRef, Input } from 'angular2/core';
import {Router} from 'angular2/router';
import {SonnyComponent} from './sonny.component';
import {SonnyDialogue } from './sonny.dialogue.component';
import {CalComponent} from './cal.component';
import {GoCalComponent} from './go.cal.component';
import {WeatherComponent} from './weather.component';
import {KindnessService} from './kindness.service';
declare var jQuery: any;

@Component({
  selector: 'background',
  templateUrl: 'app/background.component.html',
  styleUrls: ['app/background.component.css'],
  directives: [SonnyComponent,SonnyDialogue,CalComponent,GoCalComponent,WeatherComponent],
  providers: [KindnessService,SonnyComponent,SonnyDialogue,WeatherComponent,CalComponent]
})

export class BackgroundComponent implements OnInit{

  public showStyle = false;
  private theme = "summer";
  private selectedBackground = "summer";
  private furnitureImg = './img/scenes/summer.gif';
  private calVisit = 0;
  private sonnyComponent;
  private sonnyDialogue;
  private kindnessService;
 

    constructor(kindnessService:KindnessService,sonnyComponent:SonnyComponent,sonnyDialogue : SonnyDialogue) {
      this.kindnessService = kindnessService;
      this.sonnyComponent = sonnyComponent;
      this.sonnyDialogue = sonnyDialogue;
    }

    ngOnInit(){
    
    }

    /*
    * CHECK SUBMISSION
    */
    kindessSubmit(){   
      document.getElementById("submitCheck").style.display = "block";   
      var inputPerson = <HTMLInputElement>document.getElementById("inputPerson");
      var inputKindness = <HTMLInputElement>document.getElementById("inputKindness");

      if(inputPerson.value == "" && inputKindness.value == ""){
        console.log("Fields empty");  
        document.getElementById("kindnessText").style.color = "red";    
        document.getElementById("whoText").style.color = "red";   
        inputPerson.placeholder = "Please enter a person or recipient into this field!";
        inputKindness.placeholder = "Please record a kindness you performed into this field!";
      }
      else if(inputPerson.value == ""){
        console.log("No Who");
        document.getElementById("whoText").style.color = "red"; 
        document.getElementById("kindnessText").style.color = "black";  
        inputPerson.placeholder = "Please enter a person or recipient into this field!";

      }
      else if(inputKindness.value == ""){
        console.log("No Kindness");
        document.getElementById("kindnessText").style.color = "red"; 
        document.getElementById("whoText").style.color = "black";  
        inputKindness.placeholder = "Please record a kindness you performed into this field!";
      }
      else{
        this.kindnessSuccess(); // winning animation
        this.kindnessService.saveData(inputPerson.value,inputKindness.value);// call in the service to deal with data
      }
    }
    
    // SUBMISSION SUCCESSFUL
    kindnessSuccess(){
       
      if(document.getElementById('sonnyIcon').style.display == "none"){
      this.sonnyComponent.sonnyState("winning");
      this.sonnyDisclaimer(["Congrats on recording today's kindness!!"],2000);
      }
      else{ // if initial
      this.sonnyComponent.sonnyState("intro-winning");
      this.sonnyDisclaimer(["Congrats on recording today's kindness!!"],2000);
      }
      document.getElementById("doneView").style.display = "block";
      setTimeout(() => { 
        document.getElementById("kindnessView").style.display = "none";
      }, 500);
      this.sonnyDialogue.transitionViews("kindnessView","doneView");
    }

    sonnyDisclaimer(phraseArray,timeout){
      // winning disclaimer
      setTimeout(() => {  
        
        this.sonnyDialogue.sonnySpeech(true,phraseArray);
        this.sonnyComponent.startTalking();
        setTimeout(() => {  
        this.sonnyComponent.stopTalking();
        }, 6000);
      }, timeout);
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

