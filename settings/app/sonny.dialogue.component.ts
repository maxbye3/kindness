import {Component, ElementRef, OnInit} from 'angular2/core';
import { SonnyComponent } from './sonny.component';
import { KindnessComplete } from './kindness-complete.component';
import { KindnessService } from './kindness.service';
declare var jQuery: any;


@Component({
    selector: 'sonny-speech',
    template: `
    <kindness-complete></kindness-complete>
    <!-- Help Screen -->
    <div id='helpView'>
            <div class="themeButton selected" (click)="giveExample()">
                give me an example kindness
            </div>

            <div class="themeButton selected" >
                show me the tour again
            </div>

            <div class="themeButton selected" (click)="contactme()">
            I have a question 
            </div>

            <div class="themeButton selected" (click)="goBack('help')">
                go back
            </div>
        </div>
    <!--help screen-->

    <!-- Contact View -->
    <div id="contactView" style="position: absolute">
        <form action="" id="kindness" style="width: 80%">
          <div style="text-align: left;">
            <h3>Your Email</h3>
            <input class="input" type="text" id="inputOptional" placeholder="optional">
            

            <h3>Message </h3>
            <input class="input" type="text" id="inputMessage" placeholder="Leave thoughts, feelings, death threats, comments and/or feedback here">
           
          </div>

          <div class="themeButton selected">
            SUBMIT
          </div>

          <div class="themeButton selected" (click)="goBack('email')">
                go back
            </div>


        </form>
      </div><!-- contact view -->
    `,
    styleUrls: ["app/sonny.dialogue.component.css"],
    directives: [KindnessComplete],
    providers: [SonnyComponent,KindnessService]
})

export class SonnyDialogue implements OnInit {
    private sonnyComponent;
    public launchOutro: () => void; 
    private hoursLeft;
    private calComponent;
    private kindnessService;

    constructor(sonnyComponent: SonnyComponent,kindnessService:KindnessService) {
        this.sonnyComponent = sonnyComponent;
        this.kindnessService = kindnessService;
    }

    ngOnInit() {

        //calculate the number of hours left
        this.hoursLeft = this.calculateHoursLeft();

        // setTimeout(() => {  
        //     document.getElementById("kindnessView").style.display = 'none';
        // }, 0); 
       var victoryTrue = document.getElementById("doneView").style.display != "none";
       if(!victoryTrue){
        this.greeting(false,["Hello! Welcome!<br>This is the prototype of the Kindness App!","Click this icon <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help."]);       
       }
       else{
        this.greeting(false,["Welcome Back!<br>You've submitted your daily kindness","However, there's more to explore. Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need my help."]);
       }
        setTimeout(() => { 
            this.jiggleIcon();
        }, 8000);

        // if sonnyStay set to false then this callback will launch:
        this.launchOutro = () => this.outro();

        


        // TEMP - LAUNCH CONTACT
            // document.getElementById("kindnessView").style.display = 'none';
            // this.sonnyComponent.startTalking();
            // this.contactme();

        // TEMP - LAUNCH HELP MENU       
            // this.transitionViews("kindnessView","helpView");

            // // launch sonny
            // this.sonnyComponent.sonnyState('intro');

            // // ask for help
            // this.greeting(true,["How can I help?"]);  
    }







    /*
    * HELP SCREEN
    * needs to be moved
    */


    /*
    * goCal()
    */
    calWin(){
        console.log('pre-yolo');
        this.calComponent.calanderWin();
    }


    /*
    * Calculate the hourse left
    */
    calculateHoursLeft(){
        var d = new Date();
        var n = d.getHours();
        var hoursLeft = 24 - n;
        return hoursLeft;
    }



    /*
    * BACK TO KINDNESS VIEW
    */
    goBack(page){ 
        
        this.sonnySpeech(true,["Click <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> if you need anything else!!"]);
        
        if(page == "help")
        this.transitionViews("helpView","kindnessView");
        else
        this.transitionViews("contactView","kindnessView");

        setTimeout(() => {  
            this.outro();
            this.jiggleIcon();
        }, 3200); 
    }

    /*
    * EXAMPLE KINDNESS
    */
    giveExample(){    
        document.getElementById("typed").innerHTML = "okay.. let me think..";

        console.log("provide kidness example");

        this.transitionViews("helpView","kindnessView");
        
        // sony asks if this okay
        this.sonnySpeech(false,["Here's something you could do.. Feel free to edit the act if it's not quite right.."]);



        // placeholders edited        
        (<HTMLInputElement>document.getElementById("inputPerson")).value = "folks";
        (<HTMLInputElement>document.getElementById("inputKindness")).value = "call them and catch up";        
    }

   /* 
    * CONTACT ME
    */
    contactme(){
        document.getElementById("typed").innerHTML = "Great! Let me just find the forms.."; 
        this.transitionViews("helpView","contactView");

        // sony contact disclaimer
        this.sonnySpeech(true,["Using the fields below you can contact the developer directly, who thinks he's a being from the moon.",
        "I know.. It's a bit strange. I think it's some psychological miswiring. Luckily, we're working through it.",
        "Seriously though, thanks for taking the time.", "All feedback is used to improve the app."]);
    }

    launchBirds(){
        // console.log("launch birds");
        setTimeout(() => { 
            document.getElementById("birdContainer").style.left = "100%"; 
        },500);


       setTimeout(() => { 
            document.getElementById("birdContainer").style.left = "-400px"; 
        },50000);


        setTimeout(() => { 
            this.launchBirds();
        },100000);
    }

    /*
    * SONNY HELP 
    */
    intHelp(){
        
        this.launchBirds();
        
        var sonny = document.getElementById("sonnyIcon");
        var ctx = this;
         document.getElementById("typed").innerHTML = ""; 
         sonny.addEventListener("click", function(){ 
                
               
                 
                //if done screen detected then transition from tht screen otherwise
                var victoryTrue = document.getElementById("doneView").style.display != "none";
                if(victoryTrue){
                    // transition from done view to helpView
                    ctx.transitionViews('doneView','helpView');
                }
                else{    
                    // transition from kindness view to help view
                    ctx.transitionViews('kindnessView','helpView');
                }
                // launch sonny
                ctx.sonnyComponent.sonnyState('intro');

                // ask for help
                ctx.greeting(true,["How can I help?"]);
                

         });
    }

    sonnyClick(){
        console.log("click!");
    }


   /*
    * OUTRO/INTRO TRANSITION
    */
    transitionViews(screen1,screen2){
        // exit screen 1
        document.getElementById(screen1).className = "";  
        document.getElementById(screen1).className += " outro";

        // enter screen 2
        document.getElementById(screen2).className = "";  
        document.getElementById(screen2).className += " intro";
    }

    /* HELP SCREEN (END)*/





    /*
    * SONNY'S OUTRO
    */
    outro(){
        this.sonnyComponent.sonnyState('exit');
        setTimeout(() => {
            this.intHelp();
        }, 5000);
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
    * JIGGLE Sonny ICON
    */
    jiggleIcon(){
         document.getElementById('sonnyIcon').style.display = 'initial';
         document.getElementById("sonnyIcon").className += ' jiggleLink';         
    }

    /*
    * SONNY SPEECH
    */
    sonnySpeech(sonnyStay, phraseArray) {      
        
        var sonnyStay = sonnyStay;
        var ctx = this;

        jQuery("#typed").typed({
            strings: phraseArray,
            typeSpeed: 0,
            showCursor: false,
            backDelay: 750,
            backSpeed: 0,
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