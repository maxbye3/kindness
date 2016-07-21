import {Component,OnInit} from 'angular2/core';
import {WeatherComponent} from './weather.component'

@Component({
  selector: 'sonny',
  templateUrl: 'app/sonny.component.html',
  styleUrls: ['app/sonny.component.css'],
  providers: [WeatherComponent]
})


export class SonnyComponent implements OnInit {
  private weatherComponent;

  constructor(weatherComponent:WeatherComponent) {
       this.weatherComponent = weatherComponent;
  }

  ngOnInit() {         
         this.sonnyState("intro"); 

            
  }

  startTalking(){
        var speechBubble = document.getElementById('speechBubble').style;
        //speechBubble.display="block";
        speechBubble.width="0vw";
        speechBubble.opacity=".5";
        setTimeout(() => {
            var bubbleOffset = window.innerWidth - 140;
            speechBubble.width= bubbleOffset + "px";
            speechBubble.opacity="1";
        }, 0); 
  }

  stopTalking(){
        document.getElementById("typed").innerHTML = "";        
        var speechBubble = document.getElementById('speechBubble').style;
        speechBubble.width="0vw";  
        speechBubble.opacity="0";
  }

   /*
    * JIGGLE Sonny ICON
    */
    jiggleIcon(img){                  
        this.weatherComponent.rain();  // tinsel rain 
        setTimeout(() => {  
            img.src = "./img/sonny/exit.gif?t=" + new Date().getTime();                                 
            document.getElementById('sonnyIcon').style.display = 'initial';
            setTimeout(() => {
            document.getElementById("sonnyIcon").className += ' jiggleLink'; 
                setTimeout(() => {
                    document.getElementById("sonnyIcon").className = "menuItem";
                }, 2000);  
            }, 500);   
        }, 5000);         
    }


    /*
    * Changing Sonny Graphic
    */
    sonnyState(state){
        var sonnyIcon = document.getElementById('sonnyIcon');
        var sonnyImg = <HTMLImageElement>document.getElementById("sonnyGif");
        var sonnyStatic = <HTMLImageElement>document.getElementById("sonnyStatic");
        switch(state) {
            case "intro":                
                sonnyImg.style.display = 'initial';                
                sonnyIcon.style.display = 'none';
                sonnyStatic.style.display = 'none';  
                sonnyStatic.src = "./img/sonny/idle.png";
                sonnyImg.src = "./img/sonny/intro.gif?t=" + new Date().getTime();  
                setTimeout(() => {
                    sonnyStatic.style.display = 'intial';
                    this.sonnyState("talking");
                    
                }, 2000);  

            break;
            case "exit":
           
                setTimeout(() => {               
                    this.stopTalking();

                    sonnyImg.src = "./img/sonny/exit.gif?t=" + new Date().getTime();
                    setTimeout(() => {   
                            this.sonnyState("");
                        }, 3000);
                }, 3000);

            break;
            case "talking":
                this.startTalking();
                sonnyImg.src = "./img/sonny/talking.gif?t=" + new Date().getTime(); 
                //sonnyStatic.style.display = 'none';
            break;
            case "winning":        
                this.stopTalking();
                sonnyImg.style.display = "none";            
                sonnyStatic.style.display = "block";
                sonnyIcon.style.display = 'none';            
                sonnyStatic.src = "./img/sonny/winning.gif?t=" + new Date().getTime();
                this.jiggleIcon(sonnyStatic);  
            break;
            case "intro-winning":
                this.stopTalking();
                sonnyImg.style.display = 'initial';                
                sonnyIcon.style.display = 'none';
                sonnyImg.src = "./img/sonny/intro.gif?t=" + new Date().getTime()
                setTimeout(() => {  
                     sonnyImg.src = "./img/sonny/winning.gif?t=" + new Date().getTime();
                     this.jiggleIcon(sonnyImg);     
                 }, 2000);
            break;
            case "bounce":
                sonnyImg.src = "./img/sonny/bounce.gif?t=" + new Date().getTime(); 
            break;
            case "checkout":
                sonnyImg.src = "./img/sonny/checkout.gif?t=" + new Date().getTime(); 
            break;
            case "yawn":
                sonnyImg.src = "./img/sonny/yawn.gif?t=" + new Date().getTime(); 
            break;
            case "idle":
                sonnyImg.src = "./img/sonny/idle.gif?t=" + new Date().getTime(); 
            break;
            case "idle-blink.gif":
                sonnyImg.src = "./img/sonny/idle-blink.gif?t=" + new Date().getTime(); 
            break;
            case "idle-look.gif":
                sonnyImg.src = "./img/sonny/idle-look.gif?t=" + new Date().getTime(); 
            break;
            default:
                sonnyImg.src = "./img/sonny/none.png";
                
                // sonny call icon appear
                sonnyIcon.style.display = 'initial';
                sonnyIcon.className = 'menuItem'; 
                sonnyIcon.style.opacity = "1";

                 // get rid of sonny gif
                 sonnyImg.style.display = 'none';
                 sonnyImg.src = "./img/sonny/none.png"
                
                break;
        }
    }
    // sonny change (end)

}

