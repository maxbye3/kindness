import {Component,OnInit} from 'angular2/core';
 import { sonnySpeech } from './speech.component';


@Component({
  selector: 'sonny',
  templateUrl: 'app/sonny.component.html',
  styleUrls: ['app/sonny.component.css'],
//   directives: [sonnySpeech]
})


export class SonnyComponent implements OnInit {
  public sonnyGif;
  sonnyImg : HTMLImageElement; 
  
  constructor() {
  }

  ngOnInit() {         
         this.sonnyState("intro");
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
        
        this.sonnyImg = <HTMLImageElement>document.getElementById("sonnyGif");

        switch(state) {
            case "intro":
                this.sonnyImg.src = "./img/sonny/intro.gif?t=" + new Date().getTime();  
                setTimeout(() => {
                    this.sonnyState("talking");
                }, 2000);  

            break;
            case "exit":
                console.log('exit'); 
                setTimeout(() => {               
                    this.stopTalking();
                    this.sonnyImg.src = "./img/sonny/exit.gif?t=" + new Date().getTime();  
                    setTimeout(() => {}, 2000);
                }, 3000);
            break;
            case "talking":
                   this.startTalking();
                   this.sonnyImg.src = "./img/sonny/talking.gif?t=" + new Date().getTime(); 
            break;
            case "winning":
                this.stopTalking();
                this.sonnyImg.src = "./img/sonny/winning.gif?t=" + new Date().getTime(); 
            break;
            case "bounce":
                this.sonnyImg.src = "./img/sonny/bounce.gif?t=" + new Date().getTime(); 
            break;
            case "checkout":
                this.sonnyImg.src = "./img/sonny/checkout.gif?t=" + new Date().getTime(); 
            break;
            case "yawn":
                this.sonnyImg.src = "./img/sonny/yawn.gif?t=" + new Date().getTime(); 
            break;
            case "idle":
                this.sonnyImg.src = "./img/sonny/idle.gif?t=" + new Date().getTime(); 
            break;
            case "idle-blink.gif":
                this.sonnyImg.src = "./img/sonny/idle-blink.gif?t=" + new Date().getTime(); 
            break;
            case "idle-look.gif":
                this.sonnyImg.src = "./img/sonny/idle-look.gif?t=" + new Date().getTime(); 
            break;
            default:
                this.sonnyImg.src = ""
        }
    }
    // sonny change (end)

}

