import {Component } from 'angular2/core';

@Component({
  selector: 'sonny',
  templateUrl: 'app/sonny.component.html',
  styleUrls: ['app/sonny.component.css']
})

export class SonnyComponent {
    private sonnyGif;

  constructor() {

        this.sonnyState('intro');

  }


  startTalking(){
        var speechBubble = document.getElementById('speechBubble').style;
        speechBubble.display="block";
        speechBubble.width="0vw";
        speechBubble.opacity=".5";
        setTimeout(() => {
            var bubbleOffset = window.innerWidth - 140;
            speechBubble.width= bubbleOffset + "px";
            speechBubble.opacity="1";
        }, 0); 
  }

  stopTalking(){
        var speechBubble = document.getElementById('speechBubble').style;
        speechBubble.width="0vw";  
        speechBubble.opacity="0";     
        setTimeout(() => {
            speechBubble.display="none";
        }, 700); 
  }



    /*
    * Changing Sonny Graphic
    */
    sonnyState(state){

        switch(state) {
            case "intro":
                this.sonnyGif = "./img/sonny/intro.gif?t=" + new Date().getTime();  
                setTimeout(() => {
                    this.sonnyState("talking");
                }, 2000);  

            break;
            case "exit":
                
                this.sonnyGif = "./img/sonny/exit.gif";
            break;
            case "talking":
                this.startTalking();
                this.sonnyGif = "./img/sonny/talking.gif";
                setTimeout(() => {
                    this.sonnyState("idle");
                }, 8000);  

            break;
            case "winning":
                this.stopTalking();
                this.sonnyGif = "./img/sonny/winning.gif";
            break;
            case "bounce":
                this.sonnyGif = "./img/sonny/bounce.gif";
            break;
            case "checkout":
                this.sonnyGif = "./img/sonny/checkout.gif";
            break;
            case "yawn":
                this.sonnyGif = "./img/sonny/yawn.gif";
            break;
            case "idle":
                this.sonnyGif = "./img/sonny/idle.gif";
            break;
            case "idle-blink.gif":
                this.sonnyGif = "./img/sonny/idle-blink.gif";
            break;
            case "idle-look.gif":
                this.sonnyGif = "./img/sonny/idle-look.gif";
            break;
            default:
                this.sonnyGif = ""
        }
    }
    // sonny change (end)

}

