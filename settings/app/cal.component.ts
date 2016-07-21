import {Component, OnInit} from 'angular2/core';
declare var jQuery: any;
import { KindnessService } from './kindness.service';

@Component({
  selector: 'cal-view',
  templateUrl:'app/cal.component.html',
  styleUrls: ['app/cal.component.css'],
  providers: [KindnessService]
})

export class CalComponent implements OnInit {

  private calyTimeout;
  private kindnessService;

    constructor(kindnessService:KindnessService) {
       
        this.kindnessService = kindnessService;

   
    }
  ngOnInit(){
     jQuery(".clickTest").on("click", "button", (event) => this.test());

     jQuery(".clickTest").click(() => this.test());

  }



 public test(){
    alert('works'); // "undefined"
    console.log('works');
 }

 viewDetails(){
   console.log("please work");
 }

  /*
   * Go To Kindness View
  */
    toKindness(){ 
      var calyPhone = <HTMLImageElement>document.getElementById("calyPhone");
      calyPhone.style.display = "none";      
      document.getElementById("calBubble").style.opacity = "0";
      document.getElementById("calyGif").style.display = "none";     
      jQuery("html, body").animate({ 
        scrollTop: "0px"
      }, 1000);  
      // DELETE CONTENTS OF SPEECH BUBBLE
      setTimeout(() => { 
      document.getElementById("calType").innerHTML = '';
      }, 1000);
    }




   /*
   * CALY: VICTORY OR CHAT
   * If there's been a victory then let the user know and delay the chat
   * Returns now if kindness not submitted
   * Returns later if kindness
   */
    victoryChat(phaseArray){
      var victoryTrue = document.getElementById("doneView").style.display != "none";
      if(victoryTrue){
        this.calSpeech(true,["Congratulations...."]);
        setTimeout(() => { 
          this.calSpeech(true,phaseArray);
        }, 3000);  
        
      }
      else{
        this.calSpeech(true,phaseArray);
      }

    //   setTimeout(() => { 
    //         this.stopTalking();
    //  }, 8000); 
    }


  // Task Complete
  // What view should we int based on tasks complete
  intTask(taskComplete){
    
    // Load variables
    var taskView = document.getElementById("task-view");
    
    // Load data  
    var whoArray = this.kindnessService.loadWhoArray();
    var kindnessArray = this.kindnessService.loadKindnessArray();
    var dateArray = this.kindnessService.loadDateArray();
    var taskComplete = this.kindnessService.loadData();
    


    var kindnessIncomplete = "\
    <div class='square'>\
    <h3>Keep up the Streak!</h3>\
    <p>Try and reflect on a kidness <br>\
    no matter how small tomorrow.</p>\
    </div>\
    ";

    function createView(kindnessIncomplete){

      taskView.style.display = 'block';

      var kindnesslist = '';
      for(var i = 0; i < taskComplete; i++){
          
          var kindnessComplete = "\
          <div class='square task"+i+"'>\
          <h3>Day Complete "+(taskComplete-i)+"</h3>\
          <p class='kindness"+i+"'>"+kindnessArray[i]+"</p>\
          <p onclick='makeVisible("+i+")'><a href=''>View Details</a></p>\
          </div>\
          <div class='more taskDetail"+i+"'>\
          <p class='kindness'>"+kindnessArray[i]+"&nbsp;<span onclick='editText(\"kindness\",\""+kindnessArray[i]+"\","+i+")'><a href=''>(edit)</a></span></p>\
          <p class='who'>"+whoArray[i]+"&nbsp;<span onclick='editText(\"who\",\""+whoArray[i]+"\","+i+")'><a href=''>(edit)</a></span></p>\
          <p>"+dateArray[i]+"&nbsp;<span><a href=''>(edit)</a></span></p>\
          <h6 class='delete' onclick='deleteData("+i+")'>delete day</h6>\
          </div>\
          ";

          kindnesslist += kindnessComplete;
      }
      taskView.innerHTML = "<center>"+kindnesslist+kindnessIncomplete+"</center>";   
    }
        

    switch(taskComplete){
      case 0:              
        this.calSpeech(true,["Welcome!","It doesn't actually look like you've done anything...","Click <img src='./img/icons/sonny.png' style='height: 25px;border: #473939 solid 0.5px;padding: 5px;'> to get started... Or not. You're a strong independent human and you can do what you want.."]);
        var kindnessIncomplete = "\
          <div class='square encourageScreen' >\
          <h3>Fill out your first kindness!</h3>\
          <p>Click on <img src='./img/icons/sonny.png' style='height: 25px;border: #473939 solid 0.5px;padding: 5px;'> fill out a kind action\
          you have done or thinking of doing today.</p>\
          </div>\
        ";
        taskView.style.display = 'block';
        taskView.style.bottom = '60vh';
        taskView.innerHTML = "<center>"+kindnessIncomplete+"</center>";
      break;
      case 1:             
        this.victoryChat(["Looks like you've recorded your first kindness..","Got anything else left in the tank?","Click the kindness you submitted above to either edit or delete it."])
        var kindnessIncomplete = "\
          <div class='square encourageScreen'>\
          <h3>One Kindness Down!</h3>\
          <p>Kindness shouldn't be a one time thing <br>\
          Try and perform and record another kind act tomorrow.</p>\
          </div>\
        ";
         taskView.style.bottom = '25vh';
         createView(kindnessIncomplete);
        // taskView.innerHTML = "<center>"+kindnessComplete+kindnessIncomplete+"</center>";
      break;
      case 2:
        this.victoryChat(["Two acts of kindness..","Aren't you on a roll..."]);
        kindnessIncomplete = "\
          <div class='square encourageScreen'>\
          <h3>Go for three!</h3>\
          <p>You're so close! <br>\
          Record kindness tomorrow for 3 day streak!</p>\
          </div>\
        ";
        createView(kindnessIncomplete);

        // taskView.innerHTML = "<center>"+kindnessComplete+kindnessComplete+kindnessIncomplete+"</center>";
      break;
      case 3:
        this.victoryChat(["Three acts..<br>Looks like we're doing pretty well.."]);
        // kindnessIncomplete = "\
        //   <div class='square'>\
        //   <h3>Nice one!</h3>\
        //   <p>You've unlocked a new view! <br>\
        //   Now keep up kindness for the rest of the week!</p>\
        //   </div>\
        // ";    
       
        createView("");
      break;
      case 4:
      this.calSpeech(true,["Well.. well.. we even had to change the view to accomodate"]);
      
      // kindnessIncomplete = "\
      //     <div class='square'>\
      //     <h3>More than half the week!</h3>\
      //     <p>Try and reflect on a kidness<br>\
      //     no matter how small tomorrow.</p>\
      //     </div>\
      // ";

      weekView();


      break;
      case 5:
      this.calSpeech(true,["Bet we're feel pretty good about yourself, with all this racked up"]);
      kindnessIncomplete = "\
          <div class='square'>\
          <h3>Keep up the Streak!</h3>\
          <p>Try and reflect on a kidness <br>\
          no matter how small tomorrow.</p>\
          </div>\
      ";
      weekView();
      break;
      case 6:
      this.calSpeech(true,["I bet <img src='./img/icons/sonny.png' style='height: 20px;border: #473939 solid 0.5px;padding: 5px;vertical-align: bottom;'> is proud of you.. I'm not. I'm twice as kind as you."]);
      kindnessIncomplete = "\
          <div class='square'>\
          <h3>So Close!</h3>\
          <p>You're a day awake <br>\
          from performing a whole week of kindness!</p>\
          </div>\
      ";
      weekView();
      break;
      case 7:
      this.calSpeech(true,["That's a whole week of kindness! Making the world a better place friend"]);
      kindnessIncomplete = "\
          <div class='square'>\
          <h3>Week Complete!</h3>\
          <p>You've unlocked a new view! <br>\
          Now keep up kindness for the rest of the month!</p>\
          </div>\
      ";
      break;
    }  

    function weekView(){

      function limitChar(string){
        if(string.length > 40){
          return string.substring(0, 40);
        }
        return string;
      }

      document.getElementById("weekView").style.display = 'initial';
      document.getElementById("taskView").style.display = 'none';
 
      var actions = [];

      console.log('length '+kindnessArray.length);


      // test content
      for (var i = 0; i < kindnessArray.length; i++){
         var kindAction = kindnessArray[i];
         kindAction = limitChar(kindAction);
         actions.push('<div class="square">\
          <b>'+kindAction+'  . . .  </b><a href="#">More Details</a>\
          </div>\
         ');
        console.log(actions[i]);
      }
      
      document.getElementById("weekView").innerHTML = "<center>"+actions+"</center>";

    }

  }


  callCaly(){
       
      document.getElementById("calyCall").style.display = "none";
      document.getElementById("calBubble").style.opacity = "0"; 
      document.getElementById("calyGif").style.display = "block";  
      document.getElementById("calyGif").style.opacity = "1";      
          
      this.calyState("intro");
      this.calSpeech(true,["what now?","......"]);
      this.calyTimeout = setTimeout(() => {
                      this.stopTalking(); 
      },8000)
  }

  /*
  * Check winning
  * If in winning state then caly wins and doesn't go to idle
  */
  calyCheck(){
        document.getElementById("calyCall").style.display = "none";        
        var victoryTrue = document.getElementById("doneView").style.display != "none";
        if(victoryTrue){
        clearTimeout(this.calyTimeout);
        this.calyState("winning");
          setTimeout(() => { 
            this.calyState("chatIntro");
          },3500); 
        }
        else{
            this.calyState("chatIntro");
        }
  }

  /*
  * CALY STATE
  * Determine which state caly is in
  */
  calyState(state){ 
    var calyImg = <HTMLImageElement>document.getElementById("calyGif");
    var calyPhone = <HTMLImageElement>document.getElementById("calyPhone");
    // var calyIcon = document.getElementById('calyIcon');
    
    switch(state) {
            case "intro": 
             document.getElementById("calyGif").style.right = '-200px'  
             window.scrollTo(0,document.body.scrollHeight); // scroll to bottom of page             
              calyImg.src = "./img/caly/intro.gif?t=" + new Date().getTime();              
              // Caly animation
              setTimeout(() => {  
                window.scrollTo(0,document.body.scrollHeight); // scroll to bottom of page
                
                calyImg.style.right = "0px";             
                this.calyTimeout = setTimeout(() => {  
                  // this.calyState("idle");
                  this.calyCheck();
                },1700)  
               },700);
            break;
            case "outro":              
              calyExit(calyImg);
            break;
            case "chat":
              calyImg.src = "./img/caly/chat.gif?t=" + new Date().getTime();
              setTimeout(() => { 
                 this.calyState("chatOutro");
               },4000)  
            break;
            case "chatIntro":
               console.log("chat intro");
               calyImg.src = "./img/caly/chat-intro.gif?t=" + new Date().getTime();
               this.calyTimeout = setTimeout(() => { 
                 this.calyState("chat");
               },900);          
            break;
            case "chatOutro":
               calyImg.src = "./img/caly/chat-outro.gif?t=" + new Date().getTime();
              setTimeout(() => { 
                 this.calyState("idle");                 
               },800)  
            break;
            case "phone":
               calyImg.src = "./img/caly/phone.gif?t=" + new Date().getTime();
               this.calyTimeout = this.calyTimeout = setTimeout(() => {
                  this.calyState("phoneOutro");
              },12000)  
            break;
            case "phoneIntro":
              calyImg.src = "./img/caly/phone-intro.gif?t=" + new Date().getTime();
              this.calyTimeout = this.calyTimeout = setTimeout(() => { 
                 this.calyState("phone");
               },3000) 
            break;
            case "phoneOutro":
              calyImg.src = "./img/caly/phone-outro.gif?t=" + new Date().getTime(); 
              this.calyTimeout = this.calyTimeout = setTimeout(() => {
                this.calyState("outro");
              },3000)
            break;
            case "winning":
              calyImg.src = "./img/caly/winning.gif?t=" + new Date().getTime();
            break;
            case "idle":
              console.log('idle');
              calyImg.src = "./img/caly/idle.gif?t=" + new Date().getTime(); 
              this.calyTimeout = setTimeout(() => {
                this.calyState("phoneIntro");
              },30000) 
            break;
            case "blink":
               calyImg.src = "./img/caly/blink.gif?t=" + new Date().getTime(); 
            break;  
            case "return-phone":                       
                    
                    // INT Animation
                    document.getElementById("calType").innerHTML = ""; // remove text from bubble
                    this.calSpeech(true,['one second...','Just updating my status..']);  
                    /* INT Temp Cal Animation Graphic (id=calyPhone) */
                    setTimeout(() => {
                      calyImg.style.display = "none"; // turn off regular cal
                      calyPhone.style.display = "block";
                      calyPhone.style.opacity = '1';  

                      /* Animate calyPhone */
                      calyPhone.src="./img/caly/phone-intro.gif?t=" + new Date().getTime();                               
                      setTimeout(() => {
                      calyPhone.src="./img/caly/phone.gif?t=" + new Date().getTime();                       
                      setTimeout(() => {   
                        this.calSpeech(false,["hm.. you haven't actually done anything new have you?","Listen bud, I'm a busy guy so don't waste my time, capeesh?"]);                    
                        calyPhone.src="./img/caly/phone-outro.gif?t=" + new Date().getTime();
                        setTimeout(() => {                          
                          calyPhone.src="./img/caly/chat-intro.gif?t=" + new Date().getTime();
                          setTimeout(() => {
                            calyPhone.src="./img/caly/chat.gif?t=" + new Date().getTime();
                            setTimeout(() => {
                            calyPhone.src="./img/caly/chat-outro.gif?t=" + new Date().getTime();
                            setTimeout(() => {
                              calyExit(calyPhone);
                           },1000)   // exit chat to outro func 
                          },10000)   // chatting away
                         },1000)  // enter chat mode
                        },2000)  // put down phone
                      },8000) // using phone
                     },3000) // intro phone
                    },800) // make visible calyPhone
           
            break;            
            case "winning":
               calyImg.src = "./img/caly/winning.gif?t=" + new Date().getTime();
            break;
            default:
               calyImg.src = "./img/sonny/none.png";
                
                // sonny call icon appear
                // sonnyIcon.style.display = 'initial';
                // sonnyIcon.className = 'menuItem'; 
                // sonnyIcon.style.opacity = "1";

                 // get rid of sonny gif
                //  sonnyImg.style.display = 'none';
                //  sonnyImg.src = "./img/sonny/none.png"
                
            break;
        }

        function calyExit(calyImgType){
          calyImgType.src = "./img/caly/outro.gif?t=" + new Date().getTime();
 
              setTimeout(() => {              
                calyImgType.style.right = "-200px";
                calyImgType.style.opacity = '0';            
                document.getElementById("calBubble").style.opacity = "0";
               

                calyImgType.src = "./img/caly/intro.gif?t=" + new Date().getTime();     
                
                
                // clean up revert the horizontal orientation of caly
                calyImgType.className += "flipCaly"; 

                // Clean up
                setTimeout(() => {  
                     calyImgType.className = "";  
                     document.getElementById("calType").innerHTML = '';
                     document.getElementById("calyGif").style.display = "none";
                     document.getElementById("calyPhone").style.display = "none";  
                     document.getElementById("calyCall").style.display = "block";
                },3000)  
              },700)
        }
    }


    /*
    * CALY SPEECH
    */
    calSpeech(calyStay, phraseArray) {  
        setTimeout(() => {
         
        this.startTalking();
        document.getElementById("calType").innerHTML = "";    
        var ctx = this;
        jQuery("#calType").typed({
            strings: phraseArray,
            typeSpeed: 5,
            showCursor: false,
            backDelay: 1750,
            backSpeed: 2,
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite            
            callback: function () {

                if(!calyStay){
                  clearTimeout(ctx.calyTimeout); 
                  ctx.stopTalking();   
                  ctx.calyState("outro");
                }

                // cleanup
                phraseArray = [];                
                return;
            }
        });

        },3000) 
    }

 /*
 * START TALKING
 */
  startTalking(){
        var speechBubble = document.getElementById('calBubble');
        speechBubble.style.opacity="0";
        setTimeout(() => {
            speechBubble.style.opacity="1";
        }, 100); 
  }

 /*
 * STOP TALKING
 */
  stopTalking(){
    var speechBubble = document.getElementById('calBubble');
    setTimeout(() => { 
        speechBubble.style.opacity="0";
    },1000);   
  }

}