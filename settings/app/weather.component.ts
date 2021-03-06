import {Component, ElementRef, OnInit} from 'angular2/core';
declare var jQuery: any;


@Component({
    selector: 'weather',
    template: `


    <div id="weatherContainer">
        <div id="snowContainer1" style="position: absolute; margin-top: -60px;"></div>
        <div id="snowContainer2" style="position: absolute; margin-top: -60px;"></div>
        <div id="tinselContainer" style="position: absolute; margin-top: -60px;"></div>
    </div>
    

    `,
    //styleUrls: ["app/sonny.dialogue.component.css"],
    // providers: [SonnyComponent]
})

export class WeatherComponent implements OnInit {
    private snowTimeout;

    ngOnInit(){
        this.snow();
        console.log("snow");
    }

    snow(){ 
       this.makeItRain("snowContainer1");
        
        this.snowTimeout = setInterval(() => {  
           document.getElementById("snowContainer1").innerHTML = "";        
           this.makeItRain("snowContainer1");
        }, 10000); 

        setTimeout(() => { 
            this.snowTimeout = setInterval(() => {  
                document.getElementById("snowContainer2").innerHTML = "";        
                this.makeItRain("snowContainer2");
            }, 10000);
        }, 2500);

   }

   makeItRain(container){
        for(var i = 0; i < 10; i++){           
            document.getElementById(container).innerHTML += 
            '<div id="snow" \
            style="\
            left: '+ Math.floor((Math.random() * 90) + 1) +'vw;\
            border-radius: 500px;\
            animation-name: rain'+Math.floor((Math.random() * 2) + 1)+';\
            animation-duration: '+ Math.floor((Math.random() * 5) + 2) +'s;\
            animation-delay: '+ Math.floor((Math.random() * 5) + 0) +'s;\
            background: white;\
            "></div>';              
        }
        
   }

   rain(){ 
        
        var colors = ['red','green','blue','yellow','purple','orange'];
        colors[0];
        for(var i = 0; i < 100; i++){           
            document.getElementById("tinselContainer").innerHTML += 
            '<div id="tinsel" \
            style="\
            left: '+ Math.floor((Math.random() * 90) + 1) +'vw;\
            animation-name: rain'+Math.floor((Math.random() * 2) + 1)+';\
            animation-duration: '+ Math.floor((Math.random() * 5) + 2) +'s;\
            animation-delay: '+ Math.floor((Math.random() * 10) + 0) +'s;\
            background: '+colors[Math.floor((Math.random() * colors.length) + 0)]+';\
            "></div>';           
        }

       setTimeout(() => {  
            document.getElementById("tinselContainer").innerHTML = ""
        }, 15000); 

   }
}