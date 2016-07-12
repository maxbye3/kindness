import {Component, ElementRef, OnInit} from 'angular2/core';
import { SonnyComponent } from './sonny.component';
declare var jQuery: any;


@Component({
    selector: 'sonny-speech',
    template: '',
    providers: [SonnyComponent]
})

export class SonnyDialogue implements OnInit {
    private sonnyComponent;
    public launchOutro: () => void; 

    constructor(sonnyComponent: SonnyComponent) {
        this.sonnyComponent = sonnyComponent;
    }


    

    ngOnInit() {

        //this.greeting(false,["Hello! Welcome!<br>This is the Kindness Prototype!","Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help"]);
        this.greeting(false,["Hello!"]);   
        this.jiggleIcon();

        // if sonnyStay set to false then this callback will launch:
        this.launchOutro = () => this.outro();
  
    }
    
    /*
    * SONNY'S OUTRO
    */
    outro(){
        this.sonnyComponent.sonnyState('exit');
        setTimeout(() => {
            this.sonnyIntHelp();
        }, 5000);
    }

    /*
    * SONNY HELP 
    */
    sonnyIntHelp(){
        var ctx = this;
        var sonny = document.getElementById("sonnyIcon");
        jQuery("#sonnyIcon p").html("SHOW");

        this.cleanSonny();

        sonny.addEventListener("click", function(){
            // add slide left
                        
            // launch sonny
            ctx.sonnyComponent.sonnyState('intro');

            // ask for help
            ctx.greeting(true,["How can I help?"]);  


        }, false);
        return;
    }


    /*
    * GREETING 
    */
    greeting(sonnyStay,phraseArray){
        setTimeout(() => {         
            this.sonnySpeech(sonnyStay,phraseArray);
         }, 2200); 
    } // greeting 

    /*
    * JIGGLE ICON
    */
    jiggleIcon(){
      setTimeout(() => {  
         document.getElementById("sonnyIcon").className += ' jiggleLink';
      }, 7200);
    }

    /*
    * CLEAN SONNY
    * cleans sonny graphic so starting animation doesn't showCursor
    * cleans the speech bubble so prev phrase doesn't appear
    */
    cleanSonny(){
        jQuery("#typed").html('');
        var sonnyImg = <HTMLImageElement>document.getElementById("sonnyGif");
        sonnyImg.src = "";
    }

    /*
    * SONNY SPEECH
    */
    sonnySpeech(sonnyStay, phraseArray) {      
        debugger;
        
        var sonnyStay = sonnyStay;
        var ctx = this;

        jQuery("#typed").typed({
            strings: phraseArray,
            typeSpeed: 0,
            showCursor: false,
            backDelay: 750,
            backSpeed: 2,
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite            
            callback: function () {

                if (!sonnyStay) {
                    ctx.launchOutro();
                }

                // cleanup
                phraseArray = [];                
                return;
            }

        });
    }
    

}