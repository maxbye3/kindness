import {Component} from 'angular2/core';
import { CalComponent } from './cal.component';
declare var jQuery: any;

@Component({
  selector: 'go-cal',
    template: `
<div class="kindnessCal">
  <!--cal view-->
  <div class="menuItem" (click)="toCal()">
    <a>
      <img src="./img/caly/chatIdle.png">
      <p>See More</p>
    </a>
  </div>
</div>

  `,
  styleUrls: ['app/background.component.css'],
  providers: [CalComponent]
})


export class GoCalComponent{
  private calComponent;
  private calyCount = 0;


    constructor(calComponent: CalComponent) {
        this.calComponent = calComponent;        
    }


  /*
    * Go To Calander View
    */
    toCal(){
      
      setTimeout(() => {      
      document.getElementById("calyGif").style.display = "block";
      document.getElementById("calyGif").style.opacity = "1";
      },500)
      jQuery("html, body").animate({ 
        scrollTop: jQuery(document).height() 
      }, 1000);

       // Cal Count
       this.calyCount++;
       this.setupCaly();
       return;
    }


  setupCaly(){
  
    switch(this.calyCount){
    case 1:      
      this.calComponent.calyState("intro");
      this.calComponent.intTask();
    break;
    case 2:
      console.log("caly phone");
      document.getElementById("calyCall").style.display = "none";
      this.calComponent.calyState("return-phone");
      
    break;
    default:
      console.log("caly gone");
      document.getElementById("calType").innerHTML = ""; // remove text from bubble
      document.getElementById("calyGif").style.right = "-200px"; 
       document.getElementById("calType").innerHTML = "";
      document.getElementById("calyGif").style.display = "none";
      document.getElementById("calyPhone").style.display = "none";
      document.getElementById("calyCall").style.display = "block";

      this.calComponent.calyState("");
    break;
    }
  }


}